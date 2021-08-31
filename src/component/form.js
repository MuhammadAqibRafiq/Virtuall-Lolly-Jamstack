import React, { useState } from 'react';
import { Formik } from 'formik';
import './style.css';
import Lolly from './lolly';
import { navigate } from "gatsby";


const Form = () => {

  const [colorT, setColorT] = useState("#d52358");
  const [colorM, setColorM] = useState("#e95946");
  const [colorB, setColorB] = useState("#deaa43");

  return (
    <div className='forms'>
      <Formik
        initialValues={{
          to: "",
          from: "",
          mess: "",
        }}

        validate={values => {

          const errors = {}
          if (!values.to) {
            errors.to = "Required"
          }
          if (!values.from) {
            errors.from = "Required"
          }
          if (!values.mess) {
            errors.mess = "Required"
          }

          return errors
        }}

        onSubmit={async (values, { resetForm }) => {
          const to = values.to
          const from = values.from
          const mess = values.mess

          try {
            const response = await fetch(`/.netlify/functions/createLink`, {
              method: "POST",
              body: JSON.stringify({
                colorT,
                colorM,
                colorB,
                to,
                from,
                mess,
              }),
            })
            // Dont know why res showing undefine//

            // const res = await response.json();
            // navigate(`/showLolly?${res._id}`)
            // console.log(response)

          } catch (error) {
            console.log(error)
          }

          try {
            const res = await fetch('/.netlify/functions/getLinks');
            const Links = await res.json();
            // setLinks(Links)

            // console.log(Links.pop()._id)

            //using this line as undefine otherwise im getting length-1 //
            console.log(Links[Links.length])

            navigate(`/showLolly?${Links.pop()._id}`);
            resetForm();
          } catch (error) { console.error(error); }

          resetForm()
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          isSubmitting,
        }) => (

          <form onSubmit={handleSubmit}>

            <div className='container d-flex justify-content-center flex-wrap mt-3 forms'>

              <div className='lolly'>
                <Lolly top={colorT} mid={colorM} bot={colorB} />
                <input type='color' value={colorT} onChange={(e) => setColorT(e.target.value)} />
                <input type='color' value={colorM} onChange={(e) => setColorM(e.target.value)} />
                <input type='color' value={colorB} onChange={(e) => setColorB(e.target.value)} />
              </div>



              <div className='forminput'>
                <input
                  style={{
                    fontSize: ".9em", width: "100%", padding: ".4em .2em", margin: " 0 -.2em", border: "1px solid #fa73d9",
                    color: "#fff", backgroundColor: "#222", boxShadow: "0 0 6px #fa73d9"
                  }}
                  placeholder='To'
                  type="to"
                  name="to"
                  onChange={handleChange}
                  value={values.to || ""}
                />
                <span style={{ color: 'red' }}>{errors.to && touched.to && errors.to}</span>

                <textarea
                  style={{
                    fontSize: ".9em", width: "100%", padding: ".4em .2em", margin: " 0 -.2em", border: "1px solid #fa73d9",
                    color: "#fff", backgroundColor: "#222", boxShadow: "0 0 6px #fa73d9"
                  }}
                  placeholder='Share your sweetness'
                  type="mess"
                  name="mess"
                  value={values.mess || ""}
                  onChange={handleChange}
                />
                <span style={{ color: 'red' }}>{errors.mess && touched.mess && errors.mess}</span>

                <input
                  style={{
                    fontSize: ".9em", width: "100%", padding: ".4em .2em", margin: " 0 -.2em", border: "1px solid #fa73d9",
                    color: "#fff", backgroundColor: "#222", boxShadow: "0 0 6px #fa73d9"
                  }}
                  placeholder='From'
                  type="from"
                  name="from"
                  value={values.from || ""}
                  onChange={handleChange}
                />
                <span style={{ color: 'red' }}>{errors.from && touched.from && errors.from}</span>

                <button type="submit" disabled={isSubmitting} className='button'>
                  <h6> ✈️ Get your sweetness Link</h6>
                </button>

              </div></div>
          </form>

        )}
      </Formik></div>
  )
}

export default Form





// VALIDATION IS NOT WORKING

// import React, { useState } from 'react';
// import { Formik } from 'formik';
// import './style.css';
// import Lolly from './lolly';
// import { navigate } from "gatsby";


// const Form = () => {

//   const [colorT, setColorT] = useState("#d52358");
//   const [colorM, setColorM] = useState("#e95946");
//   const [colorB, setColorB] = useState("#deaa43");
//   const [to, setTo] = useState("");
//   const [from, setFrom] = useState("");
//   const [mess, setMess] = useState("");

//   // const [links, setLinks] = useState();

//   const resetForm = () => {
//     setTo('');
//     setFrom('');
//     setMess('');
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const body = { colorT, colorM, colorB, to, from, mess };
//     try {
//       const response = await fetch('/.netlify/functions/createLink', {
//         method: 'POST',
//         body: JSON.stringify(body),
//       });

//       // Dont know why res showing undefine//

//       // const res = await response.json();
//       // navigate(`/showLolly?${response._id}`)
//       // console.log(response)

//     } catch (error) { console.error(error); }
//     try {
//       const res = await fetch('/.netlify/functions/getLinks');
//       const Links = await res.json();
//       // setLinks(Links)

//       // console.log(Links.pop()._id)

//       //using this line as undefine otherwise im getting length-1 //
//       console.log(Links[Links.length])

//       navigate(`/showLolly?${Links.pop()._id}`);
//       resetForm();
//     } catch (error) { console.error(error); }
//   }


//   return (
//     <div className='forms'>

//       <Formik
//         initialValues={{ to: '', mess: '', from: '' }}
//         validate={values => {
//           const errors = {};
//           if (!values.to) {
//             errors.to = 'Required';
//           }
//           else if (!values.mess) {
//             errors.mess = 'Required';
//           }
//           else if (!values.from) {
//             errors.from = 'Required';
//           }
//           return errors;
//         }}
//         onSubmit={(values, { setSubmitting }) => {
//           setTimeout(() => {
//             alert(JSON.stringify(values, null, 2));
//             setSubmitting(false);
//           }, 400);
//         }}
//       >
//         {({
//           values,
//           errors,
//           touched,
//           handleBlur,
//           isSubmitting,
//         }) => (
//           <form onSubmit={handleSubmit}>

//             <div className='container d-flex justify-content-center flex-wrap mt-3 forms'>

//               <div className='lolly'>
//                 <Lolly top={colorT} mid={colorM} bot={colorB} />
//                 <input type='color' value={colorT} onChange={(e) => setColorT(e.target.value)} />
//                 <input type='color' value={colorM} onChange={(e) => setColorM(e.target.value)} />
//                 <input type='color' value={colorB} onChange={(e) => setColorB(e.target.value)} />
//               </div>

//               <div className='forminput'>
//                 <input
//                 style={{fontSize:".9em",width: "100%",padding: ".4em .2em",margin:" 0 -.2em",border: "1px solid #fa73d9",
//                 color: "#fff",backgroundColor: "#222",boxShadow: "0 0 6px #fa73d9" }}
//                   placeholder='To'
//                   type="to"
//                   name="to"
//                   onChange={(e) => setTo(e.target.value)}
//                   onBlur={handleBlur}
//                   value={to}
//                 />
//                 <span style={{ color: 'red' }}>{errors.to && touched.to && errors.to}</span>
//                 <textarea
//                 style={{fontSize:".9em",width: "100%",padding: ".4em .2em",margin:" 0 -.2em",border: "1px solid #fa73d9",
//                 color: "#fff",backgroundColor: "#222",boxShadow: "0 0 6px #fa73d9" }}
//                   placeholder='Share your sweetness'
//                   type="mess"
//                   name="mess"
//                   onChange={(e) => setMess(e.target.value)}
//                   onBlur={handleBlur}
//                   value={mess}
//                 />
//                 <span style={{ color: 'red' }}>{errors.mess && touched.mess && errors.mess}</span>
//                 <input
//                 style={{fontSize:".9em",width: "100%",padding: ".4em .2em",margin:" 0 -.2em",border: "1px solid #fa73d9",
//                 color: "#fff",backgroundColor: "#222",boxShadow: "0 0 6px #fa73d9" }}
//                   placeholder='From'
//                   type="from"
//                   name="from"
//                   onChange={(e) => setFrom(e.target.value)}
//                   onBlur={handleBlur}
//                   value={from}
//                 />
//                 <span style={{ color: 'red' }}>{errors.from && touched.from && errors.from}</span>

//                 <button type="submit" disabled={isSubmitting} className='button'> 
//                <h6> ✈️ Get your sweetness Link</h6>
//                  </button>

//               </div>
//             </div>
//           </form>

//         )}
//       </Formik>
//     </div>
//   )
// };

// export default Form;




