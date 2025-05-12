<?php

namespace App\Http\Controllers;

use App\Models\RepairRequest;
use App\Http\Requests\StoreRepairRequestRequest;
use App\Http\Requests\UpdateRepairRequestRequest;
use App\Http\Resources\RepairRequestResource;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class RepairRequestController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    public function index()
    {
        $query = RepairRequest::where('created_by', auth()->id()); 
        $repair = $query->paginate(10)->onEachSide(1);
    
        return inertia("RepairRequest/Index", [
            "repairs" => RepairRequestResource::collection($repair),
            "success" => session('success')
        ]);
    }
    
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia("RepairRequest/Create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRepairRequestRequest $request)
    {
        $data = $request->validated(); 
        /** @var $image \Illuminate\Http\UploadedFile */
        $image = $data['image'] ?? null;
        $data['created_by'] = Auth::id();
        $data['tracker'] = '0%';
        if($image){
            $data['image_url']=$image->store('RepairRequest/'.Str::random(),'public');
        }
        RepairRequest::create($data);
        return redirect()->route('RepairRequest.index')->with('success', 'Repair request created successfully');
    }
    

    /**
     * Display the specified resource.
     */
    public function show(RepairRequest $RepairRequest)
    {
        return inertia("RepairRequest/Show",["repair" => new RepairRequestResource($RepairRequest)]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(RepairRequest $RepairRequest)
    {
        return inertia("RepairRequest/Edit",["repair" => new RepairRequestResource($RepairRequest)]);       
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRepairRequestRequest $request, RepairRequest $RepairRequest)
    {
        
        $data = $request->validated(); 
        $RepairRequest->update($data);
        return redirect()->route('RepairRequest.index')->with('success', 'Repair request updated successfully');
        
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(RepairRequest $RepairRequest)
    {
        
        $RepairRequest->delete();
        return redirect()->route('RepairRequest.index')->with('success', 'Repair request was deleted successfully');
    }
}
