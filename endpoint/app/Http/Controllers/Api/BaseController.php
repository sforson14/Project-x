<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Utils\App;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Pipeline\Pipeline;

abstract class BaseController extends Controller
{
    /**
     * service
     *
     * @var mixed
     */
    protected $service;

    public function __construct($service)
    {
        $this->service = $service;
    }

    /**
     * Get all resources
     *
     * @return mixed
     */
    public function index()
    {
        return App::resources(app(Pipeline::class)
            ->send($this->service->index())
            ->through($this->filters())
            ->thenReturn());
    }

    /**
     * store resource
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $data = $request->validate($this->service->model()::storeRules(), $this->service->model()::errorMessages());

        return response()->json($this->service->store($data), Response::HTTP_CREATED);
    }

    /**
     * update
     *
     * @param  mixed $id
     * @param  mixed $request
     * @return void
     */
    public function update($id, Request $request)
    {
        $data = $request->validate($this->service->model()::updateRules($id), $this->service->model()::errorMessages());

        $resource = $this->service->show($id);

        if (!$resource) {
            return response()->json(['message' => 'resource not found'], Response::HTTP_NOT_FOUND);
        }

        if ($this->service->model()::POLICY) {
            // $this->authorize('view', $resource);
        }

        $resource = $this->service->update($id, $data);

        return response()->json($resource);
    }

    /**
     * Delete resource
     *
     * @param  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {

        $resource = $this->service->show($id);

        if (!$resource) {
            return response()->json(['message' => 'resource not found'], Response::HTTP_NOT_FOUND);
        }

        if ($this->service->model()::POLICY) {
            // $this->authorize('delete', $resource);
        }

        $this->service->destroy($id);


        return response()->json([], Response::HTTP_NO_CONTENT);
    }


    /**
     * find resource
     *
     * @param  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        $resource = $this->service->show($id);

        if (!$resource) {
            return response()->json(['message' => 'resource not found'], Response::HTTP_NOT_FOUND);
        }

        return response()->json($resource, Response::HTTP_OK);
    }



    /**
     * filters
     *
     * @return array
     */
    protected function filters()
    {
        return [];
    }

    /**
     * parse data
     *
     * @return array
     */
    public function parseData($data)
    {
        $data['client_id'] = auth()->user()->id;

        return $data;
    }
}
