
const SignUp = () => {
    
    return (
      <div className="flex items-center justify-center min-h-screen">
          <div className='bg-white rounded-xl px-10 py-3'>
              <form action=''>
                  <div>
                      <h1 className="text-lg text-root-yellow-clr font-semibold pb-2 text-center">Leapfrog Student Partner SignUp</h1>
                  </div>
                  <div className="py-2">
                      <label htmlFor='' className="mb-2">Full Name</label><br/>
                      <input type='text' className='border-2 border-gray-300 rounded w-64 text-sm p-1 placeholder:p-2 placeholder:text-2x1 placeholder:italic'  placeholder="abc def"/>
                  </div>
                  <div className="pb-2">
                      <label htmlFor=''>Email</label><br/>
                      <input type='email' className='border-2 border-gray-300 rounded w-64 text-sm p-1 placeholder:p-2 placeholder:text-2x1 placeholder:italic' placeholder="someone@gmail.com" />
                  </div>
                  <div className="pb-2">
                      <label htmlFor=''>Password</label><br/>
                      <input type='password' className='border-2 border-gray-300 rounded w-64 text-sm p-1 placeholder:p-2 placeholder:text-2x1 placeholder:italic' placeholder="Password" />
                  </div>
                  <div className="pb-3">
                      <label htmlFor=''>Re-enter Password</label><br/>
                      <input type='password' className='border-2 border-gray-300 rounded w-64 text-sm p-1 placeholder:p-2 placeholder:text-2x1 placeholder:italic' placeholder="Re-enter Password" />
                  </div>
                  <button type='Submit' className=" text-white p-1 px-24 my-2  border rounded-md bg-root-yellow-clr">Register</button>
                  <div className="my-2 text-center">
                      <span className="text-gray-500">Already have an account?<span className="text-sm text-root-yellow-clr"> Log in</span></span>
                  </div>
              </form>
          </div>
      </div>
      
    )
  }
  
  export default SignUp