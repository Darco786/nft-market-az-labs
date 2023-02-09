import React from 'react'
import './UserMenu.css'
function NftNavList() {
  return (
    <section className='user-menu-section'>
        <div className='container'>
            <div className='user-menu'>
                <ul>
                    <li><a href="/" className='nav-user-link nav-user-link-active'>All Creations</a></li>
                    <li><a href="/" className='nav-user-link '>Lists</a></li>
                    <li><a href="/" className='nav-user-link '>Likes</a></li>
                    <li><a href="/" className='nav-user-link '>Bookmarks</a></li>
                    <li><a href="/" className='nav-user-link '>Public</a></li>
                    <li><a href="/" className='nav-user-link '>Private</a></li>
                </ul>
                
            </div>

        </div>
    </section>
  )
}

export default NftNavList