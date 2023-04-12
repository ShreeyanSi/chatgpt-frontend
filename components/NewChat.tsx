import { PlusIcon } from "@heroicons/react/24/outline"


function NewChat() {
    return (
        <div className="border-gray-700 chatRow hover:bg-gray-700">
            <PlusIcon className="h-4 w-4" />
            <p>New Chat</p>
        </div>
    )
}

export default NewChat