// "use client"

// import React from 'react'
// import { sendGAEvent } from '@next/third-parties/google'

// const Button = () => {
//   return (
//     // Landing Page
//    <button onClick={()=>sendGAEvent({event:"Landingpage_NavBar_Internet", value:"xyz"})}>Click</button>
// //    <button onClick={()=>sendGAEvent({event:"Landingpage_ NavBar _CoverageAreas", value:"xyz"})}>Click</button>
// //    <button onClick={()=>sendGAEvent({event:"Landingpage_ NavBar _Search", value:"xyz"})}>Click</button>
   
// //    <button onClick={()=>sendGAEvent({event:"Landingpage_ NavBar _Support", value:"xyz"})}>Click</button>
// //    <button onClick={()=>sendGAEvent({event:"Landingpage_ NavBar _MyAccount", value:"xyz"})}>Click</button>

// //    <button onClick={()=>sendGAEvent({event:"Landingpage_ NavBar _Signup", value:"xyz"})}>Click</button>

// //    <button onClick={()=>sendGAEvent({event:"Landingpage_ NavBar _Business", value:"xyz"})}>Click</button>

// //    <button onClick={()=>sendGAEvent({event:"Landingpage_ NavBar _Int_Unlbundle", value:"xyz"})}>Click</button>

// //    <button onClick={()=>sendGAEvent({event:"Landingpage_ NavBar _Int_Nwall", value:"xyz"})}>Click</button>
// //    <button onClick={()=>sendGAEvent({event:"Landingpage_ NavBar _Int_SpeedUp", value:"xyz"})}>Click</button>

// //    <button onClick={()=>sendGAEvent({event:"Landingpage_ NavBar _Int_Kaspersky", value:"xyz"})}>Click</button>



// //    <button onClick={()=>sendGAEvent({event:"Landingpage_ NavBar _Int_SafeWeb", value:"xyz"})}>Click</button>

// //    <button onClick={()=>sendGAEvent({event:"Landingpage_ NavBar _Vid_CableTV", value:"xyz"})}>Click</button>

// //    <button onClick={()=>sendGAEvent({event:"Landingpage_ NavBar _Vid_NayaTV", value:"xyz"})}>Click</button>

// //    <button onClick={()=>sendGAEvent({event:"Landingpage_ NavBar _Vid_DigitalBox", value:"xyz"})}>Click</button>

// //    <button onClick={()=>sendGAEvent({event:"Landingpage_ NavBar _Vid_JoyBox", value:"xyz"})}>Click</button>

// //    <button onClick={()=>sendGAEvent({event:"Landingpage_ NavBar _Vid_ATVBox", value:"xyz"})}>Click</button>

// //    <button onClick={()=>sendGAEvent({event:"Landingpage_ NavBar _HomeSec_Nwatch", value:"xyz"})}>Click</button>

// //    <button onClick={()=>sendGAEvent({event:"Landingpage_ NavBar _HomeSec_Eview", value:"xyz"})}>Click</button>

// //    <button onClick={()=>sendGAEvent({event:"Landingpage_ NavBar _Gaming_Optimus", value:"xyz"})}>Click</button>

// //    <button onClick={()=>sendGAEvent({event:"Landingpage_ NavBar _Gaming_Exitlag", value:"xyz"})}>Click</button>

// //    <button onClick={()=>sendGAEvent({event:"Landingpage_ NavBar _ _Phone", value:"xyz"})}>Click</button>

// //    <button onClick={()=>sendGAEvent({event:"Landingpage_ CTA _ExplorePackages", value:"xyz"})}>Click</button>

// //    <button onClick={()=>sendGAEvent({event:"Landingpage_ CTA _CheckAvailability", value:"xyz"})}>Click</button>
// //    <button onClick={()=>sendGAEvent({event:"Landingpage_ AddInfo_banner _Internet", value:"xyz"})}>Click</button>
// //    <button onClick={()=>sendGAEvent({event:"Landingpage_ AddInfo _ExplorePackages", value:"xyz"})}>Click</button>
// //    <button onClick={()=>sendGAEvent({event:"Landingpage_ AddInfo_banner _Phone", value:"xyz"})}>Click</button>
// //    <button onClick={()=>sendGAEvent({event:"Landingpage_ AddInfo_banner _TV", value:"xyz"})}>Click</button>
// //    <button onClick={()=>sendGAEvent({event:"Landingpage_ FAQ _1", value:"xyz"})}>Click</button>
// //    <button onClick={()=>sendGAEvent({event:"Landingpage_ FAQ _2", value:"xyz"})}>Click</button>
// //    <button onClick={()=>sendGAEvent({event:"Landingpage_ FAQ _3", value:"xyz"})}>Click</button>
// //    <button onClick={()=>sendGAEvent({event:"Landingpage_ FAQ _4", value:"xyz"})}>Click</button>
// //    <button onClick={()=>sendGAEvent({event:"Landingpage_ FAQ _5", value:"xyz"})}>Click</button>
// //    <button onClick={()=>sendGAEvent({event:"Landingpage_ FAQ _6", value:"xyz"})}>Click</button>
// //    <button onClick={()=>sendGAEvent({event:"Landingpage_ FAQ _7", value:"xyz"})}>Click</button>
// //    <button onClick={()=>sendGAEvent({event:"Landingpage_ FAQ _8", value:"xyz"})}>Click</button>
// //    <button onClick={()=>sendGAEvent({event:"Landingpage_ Support_Whatsapp", value:"xyz"})}>Click</button>
// //    <button onClick={()=>sendGAEvent({event:"Landingpage_ Support_Call", value:"xyz"})}>Click</button>
// //    <button onClick={()=>sendGAEvent({event:"Landingpage_ Support_Email", value:"xyz"})}>Click</button>

// //ISB/RWP Internet
// //    <button onClick={()=>sendGAEvent({event:"ISBHome_IntPlan_20Mbps", value:"xyz"})}>Click</button>
// //    <button onClick={()=>sendGAEvent({event:"ISBHome_IntPlan_30Mbps", value:"xyz"})}>Click</button>
// //    <button onClick={()=>sendGAEvent({event:"ISBHome_IntPlan_50Mbps", value:"xyz"})}>Click</button>
// //    <button onClick={()=>sendGAEvent({event:"ISBHome_IntPlan_70Mbps", value:"xyz"})}>Click</button>
// //    <button onClick={()=>sendGAEvent({event:"ISBHome_IntPlan_100Mbps", value:"xyz"})}>Click</button>
// //    <button onClick={()=>sendGAEvent({event:"ISBHome_IntPlan_150Mbps", value:"xyz"})}>Click</button>
// //    <button onClick={()=>sendGAEvent({event:"ISBHome_IntPlan_300Mbps", value:"xyz"})}>Click</button>
// //    <button onClick={()=>sendGAEvent({event:"ISBHome_IntPlan_SafeWeb", value:"xyz"})}>Click</button>
// //    <button onClick={()=>sendGAEvent({event:"ISBHome_IntPlan_ExtraGbs", value:"xyz"})}>Click</button>
// //    <button onClick={()=>sendGAEvent({event:"ISBHome_IntPlan_SpeedUp", value:"xyz"})}>Click</button>
// //    <button onClick={()=>sendGAEvent({event:"ISBHome_IntPlan_SignUpOnline", value:"xyz"})}>Click</button>
// //    <button onClick={()=>sendGAEvent({event:"ISBHome_IntPlan_CheckAvailability", value:"xyz"})}>Click</button>

// //Fsd Internet
// //    <button onClick={()=>sendGAEvent({event:"FSDHome_IntPlan_10Mbps", value:"xyz"})}>Click</button>
// //    <button onClick={()=>sendGAEvent({event:"FSDHome_IntPlan_15Mbps", value:"xyz"})}>Click</button>
// //    <button onClick={()=>sendGAEvent({event:"FSDHome_IntPlan_20Mbps", value:"xyz"})}>Click</button>
// //    <button onClick={()=>sendGAEvent({event:"FSDHome_IntPlan_30Mbps", value:"xyz"})}>Click</button>
// //    <button onClick={()=>sendGAEvent({event:"FSDHome_IntPlan_50Mbps", value:"xyz"})}>Click</button>
// //    <button onClick={()=>sendGAEvent({event:"FSDHome_IntPlan_70Mbps", value:"xyz"})}>Click</button>
// //    <button onClick={()=>sendGAEvent({event:"FSDHome_IntPlan_100Mbps", value:"xyz"})}>Click</button>
// //    <button onClick={()=>sendGAEvent({event:"FSDHome_IntPlan_150Mbps", value:"xyz"})}>Click</button>
// //    <button onClick={()=>sendGAEvent({event:"FSDHome_IntPlan_300Mbps", value:"xyz"})}>Click</button>

// //    <button onClick={()=>sendGAEvent({event:"FSDHome_IntPlan_Tripleplay", value:"xyz"})}>Click</button>
// //    <button onClick={()=>sendGAEvent({event:"FSDHome_IntPlan_Standalone", value:"xyz"})}>Click</button>
// //    <button onClick={()=>sendGAEvent({event:"FSDHome_tripleplayIntPlan_10Mbps", value:"xyz"})}>Click</button>
// //    <button onClick={()=>sendGAEvent({event:"FSDHome_TripleplayIntPlan_15Mbps", value:"xyz"})}>Click</button>
// //    <button onClick={()=>sendGAEvent({event:"FSDHome_TripleplayIntPlan_20Mbps", value:"xyz"})}>Click</button>
// //    <button onClick={()=>sendGAEvent({event:"FSDHome_TripleplayIntPlan_30Mbps", value:"xyz"})}>Click</button>
// //    <button onClick={()=>sendGAEvent({event:"FSDHome_TripleplayIntPlan_50Mbps", value:"xyz"})}>Click</button>
// //    <button onClick={()=>sendGAEvent({event:"FSDHome_TripleplayIntPlan_70Mbps", value:"xyz"})}>Click</button>
// //    <button onClick={()=>sendGAEvent({event:"FSDHome_TripleplayIntPlan_100Mbps", value:"xyz"})}>Click</button>
// //    <button onClick={()=>sendGAEvent({event:"FSDHome_TripleplayIntPlan_150Mbps", value:"xyz"})}>Click</button>
// //    <button onClick={()=>sendGAEvent({event:"FSDHome_TripleplayIntPlan_300Mbps", value:"xyz"})}>Click</button>
// //    <button onClick={()=>sendGAEvent({event:"FSDHome_IntPlan_SafeWeb", value:"xyz"})}>Click</button>
// //    <button onClick={()=>sendGAEvent({event:"FSDHome_IntPlan_ExtraGbs", value:"xyz"})}>Click</button>
// //    <button onClick={()=>sendGAEvent({event:"FSDHome_IntPlan_SpeedUp", value:"xyz"})}>Click</button>
// //    <button onClick={()=>sendGAEvent({event:"FSDHome_IntPlan_CheckAvailability", value:"xyz"})}>Click</button>

// // Psh internet
// //    <button onClick={()=>sendGAEvent({event:"PSHHome_IntPlan_10Mbps", value:"xyz"})}>Click</button>
// //    <button onClick={()=>sendGAEvent({event:"PSHHome_IntPlan_15Mbps", value:"xyz"})}>Click</button>
// //    <button onClick={()=>sendGAEvent({event:"PSHHome_IntPlan_20Mbps", value:"xyz"})}>Click</button>
// //    <button onClick={()=>sendGAEvent({event:"PSHHome_IntPlan_30Mbps", value:"xyz"})}>Click</button>
// //    <button onClick={()=>sendGAEvent({event:"PSHHome_IntPlan_50Mbps", value:"xyz"})}>Click</button>
// //    <button onClick={()=>sendGAEvent({event:"PSHHome_IntPlan_70Mbps", value:"xyz"})}>Click</button>
// //    <button onClick={()=>sendGAEvent({event:"PSHHome_IntPlan_100Mbps", value:"xyz"})}>Click</button>
// //    <button onClick={()=>sendGAEvent({event:"PSHHome_IntPlan_150Mbps", value:"xyz"})}>Click</button>
// //    <button onClick={()=>sendGAEvent({event:"PSHHome_IntPlan_300Mbps", value:"xyz"})}>Click</button>
// //    <button onClick={()=>sendGAEvent({event:"PSHHome_IntPlan_CheckAvailability", value:"xyz"})}>Click</button>
// //    <button onClick={()=>sendGAEvent({event:"PSHHome_IntPlan_Tripleplay", value:"xyz"})}>Click</button>
// //    <button onClick={()=>sendGAEvent({event:"PSHHome_IntPlan_Standalone", value:"xyz"})}>Click</button>
// //    <button onClick={()=>sendGAEvent({event:"PSHHome_tripleplayIntPlan_10Mbps", value:"xyz"})}>Click</button>
// //    <button onClick={()=>sendGAEvent({event:"PSHHome_TripleplayIntPlan_15Mbps", value:"xyz"})}>Click</button>
// //    <button onClick={()=>sendGAEvent({event:"PSHHome_TripleplayIntPlan_20Mbps", value:"xyz"})}>Click</button>
// //    <button onClick={()=>sendGAEvent({event:"PSHHome_TripleplayIntPlan_30Mbps", value:"xyz"})}>Click</button>
// //    <button onClick={()=>sendGAEvent({event:"PSHHome_TripleplayIntPlan_50Mbps", value:"xyz"})}>Click</button>
// //    <button onClick={()=>sendGAEvent({event:"PSHHome_TripleplayIntPlan_70Mbps", value:"xyz"})}>Click</button>
// //    <button onClick={()=>sendGAEvent({event:"PSHHome_TripleplayIntPlan_100Mbps", value:"xyz"})}>Click</button>
// //    <button onClick={()=>sendGAEvent({event:"PSHHome_TripleplayIntPlan_150Mbps", value:"xyz"})}>Click</button>
// //    <button onClick={()=>sendGAEvent({event:"PSHHome_TripleplayIntPlan_300Mbps", value:"xyz"})}>Click</button>

// // Sgd Internet
//         //    <button onClick={()=>sendGAEvent({event:"SGDHome_IntPlan_10Mbps", value:"xyz"})}>Click</button>
//         //    <button onClick={()=>sendGAEvent({event:"SGDHome_IntPlan_15Mbps", value:"xyz"})}>Click</button>
//         //    <button onClick={()=>sendGAEvent({event:"SGDHome_IntPlan_20Mbps", value:"xyz"})}>Click</button>
//         //    <button onClick={()=>sendGAEvent({event:"SGDHome_IntPlan_30Mbps", value:"xyz"})}>Click</button>
//         //    <button onClick={()=>sendGAEvent({event:"SGDHome_IntPlan_50Mbps", value:"xyz"})}>Click</button>
//         //    <button onClick={()=>sendGAEvent({event:"SGDHome_IntPlan_70Mbps", value:"xyz"})}>Click</button>
//         //    <button onClick={()=>sendGAEvent({event:"SGDHome_IntPlan_100Mbps", value:"xyz"})}>Click</button>
//         //    <button onClick={()=>sendGAEvent({event:"SGDHome_IntPlan_150Mbps", value:"xyz"})}>Click</button>
//         //    <button onClick={()=>sendGAEvent({event:"SGDHome_IntPlan_300Mbps", value:"xyz"})}>Click</button>
//         //    <button onClick={()=>sendGAEvent({event:"SGDHome_IntPlan_CheckAvailability", value:"xyz"})}>Click</button>
//         //    <button onClick={()=>sendGAEvent({event:"SGDHome_IntPlan_Tripleplay", value:"xyz"})}>Click</button>
//         //    <button onClick={()=>sendGAEvent({event:"SGDHome_IntPlan_Standalone", value:"xyz"})}>Click</button>
//         //    <button onClick={()=>sendGAEvent({event:"SGDHome_tripleplayIntPlan_10Mbps", value:"xyz"})}>Click</button>
//         //    <button onClick={()=>sendGAEvent({event:"SGDHome_TripleplayIntPlan_15Mbps", value:"xyz"})}>Click</button>
//         //    <button onClick={()=>sendGAEvent({event:"SGDHome_TripleplayIntPlan_20Mbps", value:"xyz"})}>Click</button>
//         //    <button onClick={()=>sendGAEvent({event:"SGDHome_TripleplayIntPlan_30Mbps", value:"xyz"})}>Click</button>
//         //    <button onClick={()=>sendGAEvent({event:"SGDHome_TripleplayIntPlan_50Mbps", value:"xyz"})}>Click</button>
//         //    <button onClick={()=>sendGAEvent({event:"SGDHome_TripleplayIntPlan_70Mbps", value:"xyz"})}>Click</button>
//         //    <button onClick={()=>sendGAEvent({event:"SGDHome_TripleplayIntPlan_100Mbps", value:"xyz"})}>Click</button>
//         //    <button onClick={()=>sendGAEvent({event:"SGDHome_TripleplayIntPlan_150Mbps", value:"xyz"})}>Click</button>
//         //    <button onClick={()=>sendGAEvent({event:"SGDHome_TripleplayIntPlan_300Mbps", value:"xyz"})}>Click</button>


// //Mlt Internet
//         //    <button onClick={()=>sendGAEvent({event:"MLTHome_IntPlan_10Mbps", value:"xyz"})}>Click</button>
//         //    <button onClick={()=>sendGAEvent({event:"MLTHome_IntPlan_15Mbps", value:"xyz"})}>Click</button>
//         //    <button onClick={()=>sendGAEvent({event:"MLTHome_IntPlan_20Mbps", value:"xyz"})}>Click</button>
//         //    <button onClick={()=>sendGAEvent({event:"MLTHome_IntPlan_30Mbps", value:"xyz"})}>Click</button>
//         //    <button onClick={()=>sendGAEvent({event:"MLTHome_IntPlan_50Mbps", value:"xyz"})}>Click</button>
//         //    <button onClick={()=>sendGAEvent({event:"MLTHome_IntPlan_70Mbps", value:"xyz"})}>Click</button>
//         //    <button onClick={()=>sendGAEvent({event:"MLTHome_IntPlan_100Mbps", value:"xyz"})}>Click</button>
//         //    <button onClick={()=>sendGAEvent({event:"MLTHome_IntPlan_150Mbps", value:"xyz"})}>Click</button>
//         //    <button onClick={()=>sendGAEvent({event:"MLTHome_IntPlan_300Mbps", value:"xyz"})}>Click</button>
//         //    <button onClick={()=>sendGAEvent({event:"MLTHome_IntPlan_CheckAvailability", value:"xyz"})}>Click</button>
//         //    <button onClick={()=>sendGAEvent({event:"MLTHome_IntPlan_Tripleplay", value:"xyz"})}>Click</button>
//         //    <button onClick={()=>sendGAEvent({event:"MLTHome_IntPlan_Standalone", value:"xyz"})}>Click</button>
//         //    <button onClick={()=>sendGAEvent({event:"MLTHome_tripleplayIntPlan_10Mbps", value:"xyz"})}>Click</button>
//         //    <button onClick={()=>sendGAEvent({event:"MLTHome_TripleplayIntPlan_15Mbps", value:"xyz"})}>Click</button>
//         //    <button onClick={()=>sendGAEvent({event:"MLTHome_TripleplayIntPlan_20Mbps", value:"xyz"})}>Click</button>
//         //    <button onClick={()=>sendGAEvent({event:"MLTHome_TripleplayIntPlan_30Mbps", value:"xyz"})}>Click</button>
//         //    <button onClick={()=>sendGAEvent({event:"MLTHome_TripleplayIntPlan_50Mbps", value:"xyz"})}>Click</button>
//         //    <button onClick={()=>sendGAEvent({event:"MLTHome_TripleplayIntPlan_70Mbps", value:"xyz"})}>Click</button>
//         //    <button onClick={()=>sendGAEvent({event:"MLTHome_TripleplayIntPlan_100Mbps", value:"xyz"})}>Click</button>
//         //    <button onClick={()=>sendGAEvent({event:"MLTHome_TripleplayIntPlan_150Mbps", value:"xyz"})}>Click</button>
//         //    <button onClick={()=>sendGAEvent({event:"MLTHome_TripleplayIntPlan_300Mbps", value:"xyz"})}>Click</button>

// //Skt Internet
//         //    <button onClick={()=>sendGAEvent({event:"SKTHome_IntPlan_10Mbps", value:"xyz"})}>Click</button>
//         //    <button onClick={()=>sendGAEvent({event:"SKTHome_IntPlan_15Mbps", value:"xyz"})}>Click</button>
//         //    <button onClick={()=>sendGAEvent({event:"SKTHome_IntPlan_20Mbps", value:"xyz"})}>Click</button>
//         //    <button onClick={()=>sendGAEvent({event:"SKTHome_IntPlan_30Mbps", value:"xyz"})}>Click</button>
//         //    <button onClick={()=>sendGAEvent({event:"SKTHome_IntPlan_50Mbps", value:"xyz"})}>Click</button>
//         //    <button onClick={()=>sendGAEvent({event:"SKTHome_IntPlan_70Mbps", value:"xyz"})}>Click</button>
//         //    <button onClick={()=>sendGAEvent({event:"SKTHome_IntPlan_100Mbps", value:"xyz"})}>Click</button>
//         //    <button onClick={()=>sendGAEvent({event:"SKTHome_IntPlan_150Mbps", value:"xyz"})}>Click</button>
//         //    <button onClick={()=>sendGAEvent({event:"SKTHome_IntPlan_300Mbps", value:"xyz"})}>Click</button>
//         //    <button onClick={()=>sendGAEvent({event:"SKTHome_IntPlan_CheckAvailability", value:"xyz"})}>Click</button>
//         //    <button onClick={()=>sendGAEvent({event:"SKTHome_IntPlan_Tripleplay", value:"xyz"})}>Click</button>
//         //    <button onClick={()=>sendGAEvent({event:"SKTHome_IntPlan_Standalone", value:"xyz"})}>Click</button>
//     //    <button onClick={()=>sendGAEvent({event:"SKTHome_tripleplayIntPlan_10Mbps", value:"xyz"})}>Click</button>
//     //    <button onClick={()=>sendGAEvent({event:"SKTHome_TripleplayIntPlan_15Mbps", value:"xyz"})}>Click</button>
//     //    <button onClick={()=>sendGAEvent({event:"SKTHome_TripleplayIntPlan_20Mbps", value:"xyz"})}>Click</button>
//     //    <button onClick={()=>sendGAEvent({event:"SKTHome_TripleplayIntPlan_30Mbps", value:"xyz"})}>Click</button>
//     //    <button onClick={()=>sendGAEvent({event:"SKTHome_TripleplayIntPlan_50Mbps", value:"xyz"})}>Click</button>
//     //    <button onClick={()=>sendGAEvent({event:"SKTHome_TripleplayIntPlan_70Mbps", value:"xyz"})}>Click</button>
//     //    <button onClick={()=>sendGAEvent({event:"SKTHome_TripleplayIntPlan_100Mbps", value:"xyz"})}>Click</button>
//     //    <button onClick={()=>sendGAEvent({event:"SKTHome_TripleplayIntPlan_150Mbps", value:"xyz"})}>Click</button>
//     //    <button onClick={()=>sendGAEvent({event:"SKTHome_TripleplayIntPlan_300Mbps", value:"xyz"})}>Click</button>

// //Phone
//     //    <button onClick={()=>sendGAEvent({event:"Phone_CTA_SignUp", value:"xyz"})}>Click</button>
//    //    <button onClick={()=>sendGAEvent({event:"Phone_ViewCallTariff ", value:"xyz"})}>Click</button>

//    //Offers
// //    onClick={() => sendGAEvent({ event: 'Offers_BannerCTA_OnlineSignup', value: 'xyz' })}

// //    onClick={() => sendGAEvent({ event: 'Offers_FullPayment_OnlineSignup', value: 'xyz' })}

// //    onClick={() => sendGAEvent({ event: 'Offers_AdvPay20', value: 'xyz' })}

// //    onClick={() => sendGAEvent({ event: 'Offers_InstPlan_Call', value: 'xyz' })}

// //    onClick={() => sendGAEvent({ event: 'Offers_InstPlan_OnlineSignup', value: 'xyz' })}

// //    onClick={() => sendGAEvent({ event: 'Offers_OnlineSignup', value: 'xyz' })}

// //    onClick={() => sendGAEvent({ event: 'Offers_Referral', value: 'xyz' })}

// //    onClick={() => sendGAEvent({ event: 'Offers_OnlineSignup', value: 'xyz' })}

// //Speed UP: 
//    onClick={() => sendGAEvent({ event: 'Speedup_BannerCTA_OnlineSignup', value: 'xyz' })}

// //Nwall   
//    onClick={() => sendGAEvent({ event: 'NWall_BannerCTA', value: 'xyz' })}

//    onClick={() => sendGAEvent({ event: 'NWall_LeadForm', value: 'xyz' })}

// //Safe Web    
//    onClick={() => sendGAEvent({ event: 'SafeWeb_ BannerCTA_OnlineSignup', value: 'xyz' })}

//    onClick={() => sendGAEvent({ event: 'SafeWeb_Home', value: 'xyz' })}

//    onClick={() => sendGAEvent({ event: 'SafeWeb_Corporate', value: 'xyz' })}

// //Cable TV   
//    onClick={() => sendGAEvent({ event: 'CableTv_BannerCTA_OnlineSignup', value: 'xyz' })}

//    onClick={() => sendGAEvent({ event: 'CableTv_ChannelList', value: 'xyz' })}

//    onClick={() => sendGAEvent({ event: 'CableTv_DigitalBox', value: 'xyz' })}

//    onClick={() => sendGAEvent({ event: 'CableTv_JoyBox', value: 'xyz' })}

//    onClick={() => sendGAEvent({ event: 'CableTv_AndroidtvBox', value: 'xyz' })}

//    onClick={() => sendGAEvent({ event: 'CableTv_NayaTv', value: 'xyz' })}

// //Digital Box:     
//    onClick={() => sendGAEvent({ event: 'DigitalBox_BannerCTA', value: 'xyz' })}

//    onClick={() => sendGAEvent({ event: 'DigitalBox_Package_Basic', value: 'xyz' })}

//    onClick={() => sendGAEvent({ event: 'DigitalBox_Package_DigitalBox1', value: 'xyz' })}

//    onClick={() => sendGAEvent({ event: 'DigitalBox_Package_DigitalBox2', value: 'xyz' })}

//    onClick={() => sendGAEvent({ event: 'DigitalBox_OnlineSignup', value: 'xyz' })}

//    onClick={() => sendGAEvent({ event: 'DigitalBox_Hardware', value: 'xyz' })}

//    onClick={() => sendGAEvent({ event: 'DigitalBox_InstalledPlan', value: 'xyz' })}

//    onClick={() => sendGAEvent({ event: 'DigitalBox_Terms&Conditions', value: 'xyz' })}

//    onClick={() => sendGAEvent({ event: 'DigitalBox_LeadForm', value: 'xyz' })}

// //Joybox   
//    onClick={() => sendGAEvent({ event: 'JoyBox_BannerCTA_OnlineSignup', value: 'xyz' })}
//    onClick={() => sendGAEvent({ event: 'buttonClicked', value: 'xyz' })}
//    onClick={() => sendGAEvent({ event: 'buttonClicked', value: 'xyz' })}
//    onClick={() => sendGAEvent({ event: 'buttonClicked', value: 'xyz' })}
//    onClick={() => sendGAEvent({ event: 'buttonClicked', value: 'xyz' })}
//    onClick={() => sendGAEvent({ event: 'buttonClicked', value: 'xyz' })}
//    onClick={() => sendGAEvent({ event: 'buttonClicked', value: 'xyz' })}
//    onClick={() => sendGAEvent({ event: 'buttonClicked', value: 'xyz' })}
//    onClick={() => sendGAEvent({ event: 'buttonClicked', value: 'xyz' })}
//    onClick={() => sendGAEvent({ event: 'buttonClicked', value: 'xyz' })}
//    onClick={() => sendGAEvent({ event: 'buttonClicked', value: 'xyz' })}
//    onClick={() => sendGAEvent({ event: 'buttonClicked', value: 'xyz' })}
//    onClick={() => sendGAEvent({ event: 'buttonClicked', value: 'xyz' })}




//   )
// }

// export default Button