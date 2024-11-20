

const AppLayout = () => {
  return (
    <div className="app-layout">
      <nav className="bg-gray-800 text-white p-4">
        <ul className="flex space-x-4">
          <li className="hover:text-blue-600 cursor-pointer transition duration-300">Home</li>
          <li className="hover:text-blue-600 cursor-pointer transition duration-300">Browse</li>
          <li className="hover:text-blue-600 cursor-pointer transition duration-300">Library</li>
        </ul>
      </nav>
      <main className="flex-grow p-4">
        {/* Main content goes here */}
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>© 2023 SoundScape</p>
      </footer>
    </div>
  );
};

export default AppLayout;