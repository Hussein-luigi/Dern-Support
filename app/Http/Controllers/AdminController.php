<?php

namespace App\Http\Controllers;
use App\Models\RepairRequest;
use App\Models\Admin;
use App\Http\Requests\StoreAdminRequest;
use App\Http\Requests\UpdateAdminRequest;
use App\Http\Requests\UpdateRepairRequestRequest;
use App\Http\Resources\AdminResource;
use App\Http\Resources\RepairRequestResource;


class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = RepairRequest::query();
        $repair = $query->paginate(10)->onEachSide(1);
        return inertia("AdminAuth/AdminPages/Index",[
            "repairs"=> AdminResource::collection($repair),
            "success"=>session('success')
        ]);
    }
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreAdminRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        // Fetch the repair record instead of an admin record
        $repair = RepairRequest::find($id);
    
        if (!$repair) {
            return response()->json(["error" => "Repair not found"], 404);
        }
    
        return inertia("AdminAuth/AdminPages/Show", [
            "admin" => new RepairRequestResource($repair) // Make sure to use the correct Resource
        ]);
    }
    /**
     * Show the form for editing the specified resource.
     */
    public function edit( $id)  
    {
        $repair = RepairRequest::find($id);
        return inertia("AdminAuth/AdminPages/Edit",["repair" => new RepairRequestResource($repair)]);       
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRepairRequestRequest $request, $id)
{
    $repair = RepairRequest::find($id);
    if (!$repair) {
        return redirect()->back()->with('error', 'Repair request not found');
    }

    $data = $request->validated();
    $updated = $repair->update($data);

    if (!$updated) {
        return redirect()->back()->with('error', 'Update failed');
    }

    return redirect()->route('Repair.index')->with('success', 'Repair request updated successfully');
}


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Admin $admin)
    {
        //
    }
}
