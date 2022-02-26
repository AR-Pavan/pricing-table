import logo from './logo.svg';
import './App.css';

function App() {
let free = {
  title:"FREE",
  price:"0",

  users:"Single User",
  storage:"5GB Storage",

  publicProjects:"Unlimited Public Projects",
  Access:"Community Access",

  privateProjects:"Unlimited Private Projects",
  privateProjectsEnabler:false,

  phoneSupport:"Dedicated Phone Support",
  phoneSupportEnabler:false,

  subDomain:"Free Subdomain",
  subDomainEnabler:false,

  statusReports:"Monthly Status Reports",
  statusReportsEnabler:false

}
let plus = {
  title:"PLUS",
  price:"9",

  users:"5 Users",
  storage:"50GB Storage",

  publicProjects:"Unlimited Public Projects",
  Access:"Community Access",

  privateProjects:"Unlimited Private Projects",
  privateProjectsEnabler:true,

  phoneSupport:"Dedicated Phone Support",
  phoneSupportEnabler:true,

  subDomain:"Free Subdomain",
  subDomainEnabler:true,

  statusReports:"Monthly Status Reports",
  statusReportsEnabler:false


}
let pro = {
  title:"PRO",
  price:"49",

  users:"Unlimited Users",
  storage:"150GB Storage",

  publicProjects:"Unlimited Public Projects",
  Access:"Community Access",

  privateProjects:"Unlimited Private Projects",
  privateProjectsEnabler:true,

  phoneSupport:"Dedicated Phone Support",
  phoneSupportEnabler:true,

  subDomain:" Free Subdomains",
  subDomainEnabler:true,

  statusReports:"Monthly Status Reports",
  statusReportsEnabler:true,

  unlimited:"Unlimited"

}
  return (
    <section class="pricing py-5">
  <div class="container">
    <div class="row">
      <Card type={free}/>
      <Card type={plus}/>
      <Card type={pro}/>
      </div>
      </div>
      </section>
  );
}

function Card(props){
  return(
    <div class="col-lg-4">
    <div class="card mb-5 mb-lg-0">
      <div class="card-body">
        <h5 class="card-title text-muted text-uppercase text-center">{props.type.title}</h5>
        <h6 class="card-price text-center">${props.type.price}<span class="period">/month</span></h6>
        <hr></hr>
        <ul class="fa-ul">
          <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.type.title === 'FREE'?<>{props.type.users}</>:<b>{props.type.users}</b>}</li>
          <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.type.storage}</li>
          <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.type.publicProjects}</li>
          <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.type.Access}</li>
          <li class={props.type.privateProjectsEnabler?"":"text-muted"}><span class="fa-li"><i class={props.type.privateProjectsEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.type.privateProjects}</li>
          <li class={props.type.phoneSupportEnabler?"":"text-muted"}><span class="fa-li"><i class={props.type.phoneSupportEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.type.phoneSupport}</li>
          <li class={props.type.subDomainEnabler?"":"text-muted"}><span class="fa-li"><i class={props.type.subDomainEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.type.title === 'PRO'?<p><b>Unlimted</b> {props.type.subDomain}</p>:<>{props.type.subDomain}</>} </li>
          <li class={props.type.statusReportsEnabler?"":"text-muted"}><span class="fa-li"><i class={props.type.statusReportsEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.type.statusReports}</li>
        </ul>
        <div class="d-grid">
          <a href="#" class="btn btn-primary text-uppercase">Button</a>
        </div>
      </div>
      </div>
      </div>
  )
}

export default App;
