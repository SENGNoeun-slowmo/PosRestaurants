import { useCart } from "../contexts/CartContexts"; // កែជា CartContext (គ្មាន s និងគ្មាន .tsx)

export function UserSwitcher() {
  const { currentUser, allUsers, switchUser } = useCart();

  // Debug logs (លុបនៅ production)
  // console.log("Current User:", currentUser);
  // console.log("All Users:", allUsers);

  // ករណី currentUser មិនទាន់មាន (គួរមិនកើតឡើងទេ ប៉ុន្តែ safe ជាង)
  if (!currentUser || !allUsers) {
    return (
      <div className="p-6 text-center text-gray-500 animate-pulse">
        កំពុងទាញព័ត៌មានអ្នកប្រើប្រាស់...
      </div>
    );
  }

  return (
    <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl shadow-md mb-8">
      <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
        អ្នកប្រើប្រាស់បច្ចុប្បន្ន
      </h3>

      {/* Current User Card */}
      <div className="flex flex-col items-center mb-8 bg-white p-6 rounded-xl shadow-lg transition-all hover:shadow-xl">
        <div className="relative">
          <img
            src={currentUser.avatar}
            alt={currentUser.name}
            className="w-32 h-32 rounded-full border-4 border-blue-600 shadow-lg object-cover"
          />
          <span className="absolute bottom-0 right-0 bg-green-500 text-white text-xs px-3 py-1 rounded-full border-2 border-white">
            Online
          </span>
        </div>
        <p className="text-2xl font-bold text-blue-700 mt-4">{currentUser.name}</p>
        <p className="text-gray-600">{currentUser.email}</p>
      </div>

      {/* Switch User Section */}
      <h4 className="text-xl font-semibold mb-5 text-center text-gray-700">
        ជ្រើសអ្នកប្រើប្រាស់ផ្សេង
      </h4>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
        {allUsers.map((user) => (
          <button
            key={user.id}
            onClick={() => switchUser(user.id)}
            disabled={currentUser.id === user.id}
            className={`
              relative p-5 rounded-xl transition-all transform hover:scale-105 shadow-lg overflow-hidden
              focus:outline-none focus:ring-4 focus:ring-blue-300
              ${currentUser.id === user.id
                ? "bg-blue-600 text-white ring-4 ring-blue-400 cursor-default"
                : "bg-white text-gray-800 hover:bg-blue-50 border-2 border-gray-200 hover:border-blue-300"
              }
            `}
          >
            <img
              src={user.avatar}
              alt={user.name}
              className="w-20 h-20 rounded-full mx-auto mb-3 border-4 border-white shadow-md object-cover"
            />
            <p className="font-semibold text-sm">{user.name}</p>

            {/* Badge សម្គាល់អ្នកប្រើប្រាស់បច្ចុប្បន្ន */}
            {currentUser.id === user.id && (
              <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-3 py-1 rounded-full shadow">
                បច្ចុប្បន្ន
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Optional: បន្ថែម hint ខ្លះ */}
      <p className="text-center text-sm text-gray-500 mt-6">
        ចុចលើ avatar ដើម្បីប្តូរអ្នកប្រើប្រាស់ — រទេះទំនិញនឹងត្រូវបានរក្សាទុកដាច់ដោយឡែក!
      </p>
    </div>
  );
}