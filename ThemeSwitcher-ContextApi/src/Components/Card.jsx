export default function Card() {
    return (
        <div className="w-full height:100vh bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img className="p-8 rounded-t-lg" src="https://avatars.githubusercontent.com/u/137316122?v=4" alt="product_image1" />
            </a>
            <div className="px-5 pb-5 ">

                <div className="flex items-center mt-3 mb-5 ml-12">
                   

                    <div className="bg-green-600 text-align-center p-3">
                       Welcome to my Profile!
                     </div>

                </div>
                     
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mb-3">
                        Hey , I am Pravalika , Software Engineer @ Microsoft
                    </h5>
                </a>
                
                

                <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900 dark:text-white bg-red-600 p-2 rounded-lg">GNITS'25</span>
                    <a
                        href="/"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Contact Me
                    </a>
                </div>
            </div>
        </div>
    );
}
