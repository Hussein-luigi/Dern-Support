import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import TextAreaInput from "@/Components/TextAreaInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
// import SelectInput from "@/Components/SelectInput";

export default function Create(){
    const { data, setData, post, errors, reset } = useForm({
        image: "",
        name: "",
        // status: "",
        description: "",
        due_date: "",
      });
    
      const onSubmit = (e) => {
        e.preventDefault();
    
        post(route("RepairRequest.store"));
      };
    return(
        <>
            <AuthenticatedLayout
            header={
            <div className="flex justify-between text-center">
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Sent new Request
                </h2>
            </div>
            }
            >
                <Head title="Repair Request" />
                <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                        <form
              onSubmit={onSubmit}
              className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg"
            >
              <div>
                <InputLabel
                  htmlFor="device_image_url"
                  value="Device Image"
                />
                <TextInput
                  id="device_image_url"
                  type="file"
                  name="image"
                  className="mt-1 block w-full"
                  onChange={(e) => setData("image", e.target.files[0])}
                />
                <InputError message={errors.image} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel htmlFor="request_name" value="Device name" />

                <TextInput
                  id="request_name"
                  type="text"
                  name="name"
                  value={data.name}
                  className="mt-1 block w-full"
                  isFocused={true}
                  onChange={(e) => setData("name", e.target.value)}
                />

                <InputError message={errors.name} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel
                  htmlFor="request_description"
                  value="Request Description"
                />

                <TextAreaInput
                  id="request_description"
                  name="description"
                  value={data.description}
                  className="mt-1 block w-full"
                  onChange={(e) => setData("description", e.target.value)}
                />

                <InputError message={errors.description} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel
                  htmlFor="request_due_date"
                  value="request Deadline"
                />

                <TextInput
                  id="request_due_date"
                  type="date"
                  name="due_date"
                  value={data.due_date}
                  className="mt-1 block w-full"
                  onChange={(e) => setData("due_date", e.target.value)}
                />

                <InputError message={errors.due_date} className="mt-2" />
              </div>
              {/* <div className="mt-4">
                <InputLabel htmlFor="request_status" value="Request Status" />

                <SelectInput
                  name="status"
                  id="request_status "
                  className="mt-1 block w-full"
                  onChange={(e) => setData("status", e.target.value)}
                >
                  <option value="">Select Status</option>
                  <option value="pending">Pending</option>
                  <option value="in_progress">In Progress</option>
                  <option value="completed">Completed</option>
                </SelectInput>

                <InputError message={errors.project_status} className="mt-2" />
              </div> */}
              <div className="mt-4 text-right">
                <Link
                  href={route("RepairRequest.index")}
                  className="bg-gray-100 py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2"
                >
                  Cancel
                </Link>
                <button className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600">
                  Submit
                </button>
              </div>
            </form>
                        </div>
                    </div>
                </div>
                </div>
                        
            </AuthenticatedLayout>
        </>
    )
}