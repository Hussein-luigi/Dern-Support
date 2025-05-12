<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateRepairRequestRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name'        => ['required', 'max:255'], // ✅ Corrected
            'description' => ['string'],              // ✅ No change needed
            'due_date'    => ['nullable', 'date'],    // ✅ No change needed
            'image'    => ['nullable','image'],   
            'status'      => ['required', Rule::in(['pending', 'in_progress', 'complete'])], // ✅ Fixed Rule::in
            'tracker'      => ['required', Rule::in(['10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%'])], // ✅ Fixed Rule::in
        ];
    }
}
