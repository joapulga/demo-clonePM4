import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <header className="w-full py-4 bg-gray-800">
        <div className="container mx-auto flex justify-center">
          <div className="text-2xl font-bold">
            <Link href="/">
              PRODUCTS
            </Link>
          </div>
        </div>
      </header>
      <main className="flex flex-col items-center mt-10">
        <h1 className="text-4xl font-bold">Lost your way?</h1>
        <div className="mt-4 text-center">
          <p className="mb-4">Sorry, we cant find that page. Youll find lots to explore on the home page.</p>
          <div>
            <Link href="/" className="inline-flex items-center px-4 py-2 text-lg font-semibold bg-white text-black rounded-md hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
              HOME
            </Link>
          </div>
        </div>
        <div className="mt-4">
          <span>Error Code <strong>NSES-404</strong></span>
        </div>
      </main>
      <footer className="mt-8">
        <span>FROM <strong>LOST IN SPACE</strong></span>
      </footer>
      <div className="mt-4 text-center text-gray-500">
        <p>Build Identifier: v9ae5cb35</p>
        <p>Instance: d7c8dbce-e481-4a4f-993f-96aa9c3ff464</p>
        <p>Request Id: 66a68ffe-f6f4-4408-8a91-ac2180b9feda-83623508</p>
      </div>
    </div>
  );
};

export default NotFoundPage;

