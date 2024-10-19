import Link from "next/link";
export default function CountryLabel() {
    return (
        <div className="p-12">
        <h1> LIST OF COUNTRIES</h1>
        <ul>
            <li>
                <Link href="/country/pakistan">Pakistan </Link>
            </li>
            <li>
                <Link href="/country/usa">USA</Link>
            </li>
            <li>
                <Link href="/country/canada">Canada</Link>
            </li>
            <li>
                <Link href="/country/germany">Germany</Link>
            </li>
            <li>
                <Link href="/country/australia">Australia</Link>
            </li>
        </ul>
    </div>
    );
}


// <<import Link from "next/link";

// export default function CountryNames(){
//     return (
//         <div className="p-12">
//      <h1 className="text-center bg-green-300">List of countries</h1>

//       <ul className="text-center bg-green-200 p-12">
//         <div>
//         <li>
//         <Link href="/country/pakistan">Pakistan</Link>

//         </li>

       
//         </div>

//         <li>
//             <Link href="/country/india">India</Link>
//         </li>

//         <li>
//           <Link href="/country/russia">Russia</Link>    
//         </li>

//         <li>
//         <Link href="/country/china">China</Link>
//         </li>

//         <li>
//         <Link href="/country/japan">Japan</Link>
//         </li>
//       </ul>
//         </div>
//     );
        
    
// }>>