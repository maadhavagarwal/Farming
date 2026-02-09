import React, { useState,useEffect } from "react";
import CoursesContext from "./coursesContext";

const CoursesState = (props) => {
  const coursesInitial=[]
  const [courses, setCourses] = useState(coursesInitial);
  const [adminCourses, setAdminCourses] = useState(coursesInitial);
 
  const [enrollCourses, setEnrollCourses] = useState(coursesInitial);
  const [enrollCoursesAdmin, setEnrollCoursesAdmin] = useState(coursesInitial);

const [userdetail, setUserdetail] = useState(coursesInitial);
   const [message, setMessage] = useState('');
  
  const getCourses = async () => {
    try {
      const response = await fetch("https://farming-1.onrender.com/api/add/fetchAllCourses", {
        method: "GET",
        headers: {
          "Content-Type": 'application/json',
          "auth-token": localStorage.getItem('token')
        }
      });
      const jsn = await response.json();
      setCourses(jsn);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };
  const getAdminCourses = async () => {
    try {
      const response = await fetch("https://farming-1.onrender.com/api/add/fetchAllCoursesAdmin", {
        method: "GET",
        headers: {
          "Content-Type": 'application/json',
          "auth-token": localStorage.getItem('token')
        }
      });
      const jsn = await response.json();
      setAdminCourses(jsn);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };
  

  const addCourses = async (cname, desc, image, price) => {
    try {
      const response =await fetch("https://farming-1.onrender.com/api/add/addData",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token'),
        },
        body: JSON.stringify({
          name:cname, description:desc, image:image, price:price,
    })
  });
  const data = await response.json();
      setCourses(data);
}
      // Your code for adding courses...
     catch (error) {
      setMessage("Something went wrong");
      console.error("Error adding course:", error);
    }
  };

  const addEnrollment = async (courseId,Name, paymentId, Address) => {
    try {
      const response = await fetch(
        `https://farming-1.onrender.com/api/course/enroll/${courseId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem('token'),
          },
          body: JSON.stringify({
            courseId: courseId,
            Name:Name,
            paymentId: paymentId,
            Address: Address,
          }),
        }
      );

      const enroll = await response.json();
      setEnrollCourses(enroll);
    } catch (error) {
      console.error("Error adding enrollment:", error);
    }
  };

  const deleteCourses = async (courseId) => {
    try {
      const response = await fetch(
        `https://farming-1.onrender.com/api/add/deleteCourse/${courseId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem('token'),
          }}
        )
        const enroll = await response.json();
      setCourses(enroll);
      // Your code for deleting courses...
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  const getCoursesEnrollments = async () => {
    try {
      const response = await fetch("https://farming-1.onrender.com/api/course/fetchAllEnrollment", {
        method: "GET",
        headers: {
         
          "auth-token": localStorage.getItem('token'),
        }
      });
      const jsn = await response.json();
      setEnrollCourses(jsn);
     console.log(jsn)
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };
  useEffect(() => {
    console.log(enrollCourses);
  }, [enrollCourses]);
  const getCoursesEnrollmentsAdmin = async () => {
    try {
      const response = await fetch("https://farming-1.onrender.com/api/course/fetchAllEnrollmentAdmin", {
        method: "GET",
        headers: {
         
          "auth-token": localStorage.getItem('token'),
        }
      });
      const jsn = await response.json();
      setEnrollCoursesAdmin(jsn);
     // console.log(enrollCourses)
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };
  useEffect(() => {
    console.log(enrollCoursesAdmin);
  }, [enrollCoursesAdmin]);
 
   const getUserDetail = async () => {
    try {
      const response = await fetch("https://farming-1.onrender.com/api/auth/getUser", {
        method: "GET",
        headers: {
            "auth-token": localStorage.getItem('token')
        }
    });
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const jsonUserdata = await response.json();
    setUserdetail(jsonUserdata);
} catch (error) {
    console.error("Error fetching user details:", error);
}
  };

  return (
    <CoursesContext.Provider value={{ courses, enrollCourses,adminCourses, userdetail, enrollCoursesAdmin, getCourses, addCourses, deleteCourses, addEnrollment,  getUserDetail,getCoursesEnrollments,getAdminCourses,getCoursesEnrollmentsAdmin }}>
      {props.children}
    </CoursesContext.Provider>
  );
};

export default CoursesState;
