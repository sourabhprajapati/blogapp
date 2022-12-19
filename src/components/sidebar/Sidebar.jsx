import React from 'react'
import './sidebar.css'
const Sidebar = () => {
  return (
    <div className='sidebar'>
     <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
          <img
          src="https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI"
          alt=""
          />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div> 
        <div className='sidebarItem'>
          <span className="sidebarTitle">CATEGORIES</span>
          <ul className='sidebarList'>
             <li className='sidebarListItem'>Life</li>
             <li className='sidebarListItem'>Music</li>
             <li className='sidebarListItem'>Style</li>
             <li className='sidebarListItem'>Sport</li>
             <li className='sidebarListItem'>Tech</li>
             <li className='sidebarListItem'>Cinema</li>
          </ul>
          <div className='sidebarItem'>
            <span className="sidebarTitle">FOLLOW US</span>
             <div className='sidebarSocial'>
                <i className="sidebarIcon fa-brands fa-square-facebook"></i>
                <i className="sidebarIcon fa-brands fa-square-twitter"></i>
                <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
                <i className="sidebarIcon fa-brands fa-square-instagram"></i>
             </div>
          </div>
        </div>
    </div>
  )
}

export default Sidebar
