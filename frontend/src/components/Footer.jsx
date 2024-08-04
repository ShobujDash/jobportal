function Footer() {
  return (
    <footer className="border-t border-gray-200 py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-gray-800">Job Hunt</h2>
            <p className="text-gray-600">
              &copy; 2024 Your Company. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="https://facebook.com"
              className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="currentColor"
              >
                <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.333v21.333C0 23.4.6 24 1.325 24H12.82v-9.294H9.692V11.1h3.128V8.444c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.463.1 2.797.144v3.243l-1.917.001c-1.504 0-1.796.715-1.796 1.763V11.1h3.587l-.467 3.606H16.56V24h6.116C23.4 24 24 23.4 24 22.667V1.333C24 .6 23.4 0 22.675 0z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
              aria-label="Twitter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="currentColor"
              >
                <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.724-.949.555-2.005.959-3.127 1.184-.897-.959-2.173-1.559-3.591-1.559-2.717 0-4.917 2.208-4.917 4.917 0 .39.045.765.127 1.124-4.083-.205-7.702-2.159-10.125-5.125-.422.722-.666 1.561-.666 2.475 0 1.708.87 3.217 2.188 4.099-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.829-.413.111-.849.171-1.296.171-.314 0-.621-.03-.923-.086.631 1.953 2.445 3.377 4.604 3.415-1.68 1.319-3.809 2.105-6.102 2.105-.396 0-.787-.023-1.17-.067 2.179 1.394 4.768 2.209 7.557 2.209 9.054 0 14.004-7.497 14.004-13.986 0-.21 0-.423-.016-.634.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="currentColor"
              >
                <path d="M22.23 0H1.77C.79 0 0 .774 0 1.73v20.54C0 23.226.79 24 1.77 24h20.46c.98 0 1.77-.774 1.77-1.73V1.73C24 .774 23.21 0 22.23 0zM7.12 20.452H3.56V9h3.56v11.452zM5.34 7.742c-1.14 0-2.07-.93-2.07-2.07 0-1.14.93-2.07 2.07-2.07 1.14 0 2.07.93 2.07 2.07 0 1.14-.93 2.07-2.07 2.07zM20.452 20.452h-3.558v-5.812c0-1.386-.03-3.167-1.93-3.167-1.93 0-2.23 1.506-2.23 3.063v5.916H9.174V9h3.414v1.56h.05c.48-.9 1.64-1.84 3.37-1.84 3.6 0 4.27 2.37 4.27 5.45v6.282z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
