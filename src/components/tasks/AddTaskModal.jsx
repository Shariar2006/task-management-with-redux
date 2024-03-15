import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";

const AddTaskModal = ({ setIsOpen, isOpen }) => {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        reset()
        setIsOpen(false)
    };

    function closeModal() {
        reset()
        setIsOpen(false)
    }

    return (
        <Modal setIsOpen={setIsOpen} isOpen={isOpen} title='Programming Hero'>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col mb-5">
                    <label className="mb-1" htmlFor="title">Title</label>
                    <input type="text" id="title" className="rounded-md w-full" {...register("title")} />
                </div>

                <div className="flex flex-col mb-5">
                    <label className="mb-1" htmlFor="description">Description</label>
                    <textarea type="text" id="description" className="rounded-md w-full" {...register("description")} />
                </div>

                <div className="flex flex-col mb-5">
                    <label className="mb-1" htmlFor="date">Date</label>
                    <input type="date" id="date" className="rounded-md w-full" {...register("date")} />
                </div>

                <div className="flex flex-col mb-5">
                    <label className="mb-1" htmlFor="assignedTo">Assigned To</label>
                    <select type="text" id="assignedTo" className="rounded-md w-full" {...register("assignedTo")}>
                        <option value="Riziya Keya">Riziya Keya</option>
                        <option value="Shariar Alam Emon">Shariar Alam Emon</option>
                        <option value="Mahmuda">Mahmuda</option>
                        <option value="Muna">Muna</option>
                        <option value="Monir">Monir</option>
                    </select>
                </div>

                <div className="flex flex-col mb-5">
                    <label className="mb-1" htmlFor="priority">Priority</label>
                    <select type="text" id="priority" className="rounded-md w-full" {...register("priority")}>
                        <option defaultValue value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                </div>

                <div className="flex gap-3 justify-end">
                    <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                    >
                        Cancel
                    </button>
                    <button 
                        className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                    type="submit"
                    >Submit</button>
                </div>
            </form>

        </Modal>
    );
};

export default AddTaskModal;