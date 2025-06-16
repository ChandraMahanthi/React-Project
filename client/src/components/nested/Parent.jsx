import React from 'react';
import { BrowserRouter, Link,Outlet, Route, Routes } from 'react-router-dom';

function Parent() {
  return (
    <div className='pt-20'>
        <Link to='nestedroute'>First routing</Link>
        <Link to='nestedroute2'>Second routing2</Link>
        <Outlet/>
    </div>
  )
}

export default Parent

// BrowserRouter
// Route
// Routes
// Link
// Outlet
// Navigate



// useParams