import { FaCircleUser } from "react-icons/fa6";

const Header = () => {

  return (
    <div id="header">
      <div className='dashboard-first-card-boards'>
        <h5 className='dashboard-first-card-h'>User Table</h5>

      </div>
      <div className='FaPlus-icon-container' >
        <div className='faplus-bell_container'>
          <div className='profiledropdown_container'>
            <div>
              <h5 className='profiledropdown_container_h5'>John Doe</h5>
              <p className='profiledropdown_container_p'>Software Developer</p>
            </div>
            <span className='FaPlus-name'  >
              <FaCircleUser className="profile_img" />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;




