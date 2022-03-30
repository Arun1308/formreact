

function RegisterForm() {
    return(
      <div className="form">
          <div className="form-body">
              <div >
                  <label >Name </label>
                  <input type="text" placeholder="Name"/>
              </div>
              <div>
                  <label for="email">Email </label>
                  <input  type="email"   placeholder="Email"/>
              </div>
              <div >
                  <label  for="password">Mobile Number </label>
                  <input className="form__input" type="number"  id="password" placeholder="Password"/>
              </div>
              <div >
                  <label >Country </label>
                  <input type="text" placeholder="Country"/>
              </div>
              <div >
                  <label >City </label>
                  <input type="text" placeholder="City"/>
              </div>
              <div >
                  <label >State </label>
                  <input type="text" placeholder="State"/>
              </div>
              <div >
                  <label >Message </label>
                  <input type="text" placeholder="Message"/>
              </div>
          </div>
          <div >
              <button type="submit" class="btn">Register</button>
          </div>
      </div>      
    )       
}
export default RegisterForm;
