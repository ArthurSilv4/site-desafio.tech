import { Plus } from "lucide-react";

export function CreateYourChallenge() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Create Your Challenge</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Plus className="w-12 h-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Define Your Goal</h3>
            <p className="text-gray-600">Set a clear and achievable goal for your challenge.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Plus className="w-12 h-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Set the Duration</h3>
            <p className="text-gray-600">Choose how long your challenge will last.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Plus className="w-12 h-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Invite Friends</h3>
            <p className="text-gray-600">Make it more fun by challenging your friends.</p>
          </div>
        </div>
      </div>
    </section>

  )
}