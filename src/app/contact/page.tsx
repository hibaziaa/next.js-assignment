
export default function ContactUs(){
    return(
     
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
              <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
              <p className="mb-6">Feel free to reach out for collaborations or inquiries!</p>
              
              <form className="w-full max-w-sm">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border border-gray-300 p-2 rounded mb-4 w-full"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="border border-gray-300 p-2 rounded mb-4 w-full"
                  required
                />
                <textarea
                  placeholder="Your Message"
                  className="border border-gray-300 p-2 rounded mb-4 w-full"
                  
                  required
                ></textarea>
                <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                  Send Message
                </button>
              </form>
            </div>
         
        );
      };
      
     
    