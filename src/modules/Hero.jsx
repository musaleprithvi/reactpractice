import Profile from "./Profile";

const Hero = () => {
  return (
    <>
      <div className="App container">
        <h1 className="my-4">Web development Training</h1>

        <div className="row justify-content-center">
          <div className="col-md-4">
            <Profile
              name="Prithvi Musale"
              title="Web development"
              profilepic=""
            ></Profile>
          </div>
          <div className="col-md-6">
           My name is Prithvi Musale.. I am Student of Basaveshwar Engineering College, 
            I am Pursuing MCA affiliated to VTU university.
           
          </div>
        </div>
        {/* <ItemList items={items} /> */}
      </div>
    </>
  );
};
export default Hero;
