var wbaArray = [
    {state: "Alabama (AL)", maxWba: 275, maxWeeks: 26, phoneNumber: "800-548-2546", website: "https://labor.alabama.gov/unemployment.aspx", linkName: "AL Department of Labor" }, 
    {state: "Alaska (AK) - Individual", maxWba: 370, maxWeeks: 26, phoneNumber: "907-465-2712", website:"http://labor.alaska.gov/unemployment/", linkName: "AK Unemployment Insurance"}, 
    {state: "Alaska (AK) - with Dependents", maxWba: 442, maxWeeks: 26, phoneNumber: "907-465-2712", website:"http://labor.alaska.gov/unemployment/", linkName: "AK Unemployment Insurance"}, 
    {state: "Arizona (AZ)", maxWba: 240, maxWeeks: 26, phoneNumber: "877-600-2722", website:"https://des.az.gov/services/employment/unemployment-individual", linkName: "AZ Department of Economic Security"}, 
    {state: "Arkansas (AR)", maxWba: 451, maxWeeks: 20, phoneNumber: "855-225-4440", website:"https://www.dws.arkansas.gov/unemployment/", linkName: "AR Division of Workforce Services"}, 
    {state: "California (CA)", maxWba: 450, maxWeeks: 26, phoneNumber: "800-480-3287", website:"https://www.edd.ca.gov/unemployment/filing_a_claim.htm", linkName: "CA Employment Development Department (EDD)"}, 
    {state: "Colorado (CO)", maxWba: 618, maxWeeks: 26, phoneNumber: "303-318-8000", website:"https://www.colorado.gov/pacific/cdle/unemployment", linkName: "CO Department of Labor and Employment"}, 
    {state: "Connecticut (CT) - Individual", maxWba: 649 , maxWeeks: 26, phoneNumber: "860-263-6000", website:"http://www.ctdol.state.ct.us/UI-Online/index.htm", linkName: "CT Department of Labor"}, 
    {state: "Connecticut (CT) - with Dependents", maxWba: 724, maxWeeks: 26, phoneNumber: "860-263-6000", website:"http://www.ctdol.state.ct.us/UI-Online/index.htm", linkName: "CT Department of Labor"},
    {state: "Delaware (DE)", maxWba: 400, maxWeeks: 26, phoneNumber: "", website:"https://ui.delawareworks.com/applicant-services.php", linkName: "DE Division of Unemployment Insurance"}, 
    {state: "District of Columbia (DC)", maxWba: 444, maxWeeks: 26, phoneNumber: "", website:"https://does.dcnetworks.org/claimantservices/Logon.aspx", linkName: "DC Department of Employment Services"}, 
    {state: "Florida (FL)", maxWba: 275, maxWeeks: 12, phoneNumber: "800-204-2418", website:"http://www.floridajobs.org/job-seekers-community-services/reemployment-assistance-center/claimants/file-an-initial-claim", linkName: "FL Department of Economic Security"}, 
    {state: "Georgia (GA)", maxWba: 365, maxWeeks: 14, phoneNumber: "", website:"http://dol.georgia.gov/unemployment-benefits", linkName: "GA Department of Labor"}, 
    {state: "Hawaii (HI)", maxWba: 648, maxWeeks: 26, phoneNumber: "808-586-8970", website:"http://labor.hawaii.gov/ui/", linkName: "HI Unemployment Insurance"},
    {state: "Idaho (ID)", maxWba: 448, maxWeeks: 20, phoneNumber: "208-332-8942", website:"http://labor.idaho.gov/dnn/idl/UnemploymentInsurance/UnemploymentBenefits.aspx", linkName: "ID Department of Labor"},  
    {state: "Illinois (IL) - Individual", maxWba: 484, maxWeeks: 26, phoneNumber: "800-244-5631", website:"https://www2.illinois.gov/ides/Pages/default.aspx", linkName: "IL Department of Employment Security"},
    {state: "Illinois (IL) - with Dependents", maxWba: 667, maxWeeks: 26, phoneNumber: "800-244-5631", website:"https://www2.illinois.gov/ides/Pages/default.aspx", linkName: "IL Department of Employment Security"}, 
    {state: "Indiana (IN)", maxWba: 390, maxWeeks: 26, phoneNumber: "800-457-8283", website:"http://www.in.gov/dwd/2362.htm", linkName: "IN Department of Labor"},  
    {state: "Iowa (IA) - Individual", maxWba: 481, maxWeeks: 26, phoneNumber: "866-239-0843", website:"https://www.iowaworkforcedevelopment.gov/file-claim-unemployment-insurance-benefits", linkName: "IA Workforce Development"}, 
    {state: "Iowa (IA) - with Dependents", maxWba: 591, maxWeeks: 26, phoneNumber: "866-239-0843", website:"https://www.iowaworkforcedevelopment.gov/file-claim-unemployment-insurance-benefits", linkName: "IA Workforce Development"}, 
    {state: "Kansas (KS)", maxWba: 488, maxWeeks: 16, phoneNumber: "800-292-6333", website:"https://www.getkansasbenefits.gov/Home.aspx", linkName: "KS Department of Labor"}, 
    {state: "Kentucky (KY)", maxWba: 552, maxWeeks: 26, phoneNumber: "", website:"http://kcc.ky.gov/career/If-you-are-Unemployed/Pages/default.aspx", linkName: "KY Career Center"}, 
    {state: "Louisiana (LA)", maxWba: 247, maxWeeks: 26, phoneNumber: "866-783-5567", website:"https://www.louisianaworks.net/hire/vosnet/Default.aspx", linkName: "LA Workforce Commission"}, 
    {state: "Maine (ME) - Individual", maxWba: 445, maxWeeks: 26, phoneNumber: "800-593-7660", website:"https://www.maine.gov/unemployment/", linkName: "ME Department of Labor"}, 
    {state: "Maine (ME) - with Dependents", maxWba: 667, maxWeeks: 26, phoneNumber: "800-593-7660", website:"https://www.maine.gov/unemployment/", linkName: "ME Department of Labor"}, 
    {state: "Maryland (MD)", maxWba: 430, maxWeeks: 26, phoneNumber: "800-827-4839", website:"http://www.dllr.state.md.us/employment/uibenefits.shtml", linkName: "MD Department of Labor (DLLR)"}, 
    {state: "Massachusetts (MA) - Individual", maxWba: 823, maxWeeks: 26, phoneNumber: "877-626-6800", website:"http://www.mass.gov/lwd/unemployment-insur/", linkName: "MA Labor and Workforce Development"}, 
    {state: "Massachusetts (MA) - with Dependents", maxWba: 1234, maxWeeks: 26, phoneNumber: "877-626-6800", website:"http://www.mass.gov/lwd/unemployment-insur/", linkName: "MA Labor and Workforce Development"}, 
    {state: "Michigan (MI)", maxWba: 362, maxWeeks: 20, phoneNumber: "866-500-0017", website:"http://www.michigan.gov/uia/0,4680,7-118-52610---,00.html", linkName: "MI Department of Labor and Economic Opportunity"}, 
    {state: "Minnesota (MN)", maxWba: 740, maxWeeks: 26, phoneNumber: "77-898-9090", website:"http://www.uimn.org/applicants/index.jsp#6", linkName: "MN Department of Employment and Economic Development"}, 
    {state: "Mississippi (MS)", maxWba: 235, maxWeeks: 26, phoneNumber: "601-321-6000", website:"http://www.mdes.ms.gov/unemployment-claims/", linkName: "MS Department of Employment Security"}, 
    {state: "Missouri (MO)", maxWba: 320, maxWeeks: 13, phoneNumber: "", website:"https://labor.mo.gov/DES/Claims", linkName: "MO Department of Labor and Industrial Relations"}, 
    {state: "Montana (MT)", maxWba: 552, maxWeeks: 28, phoneNumber: "406-444-0532", website:"https://montanaworks.gov/Job-Seeker-UI-Claimant", linkName: "MT Department of Labor and Industry"}, 
    {state: "Nebraska (NE)", maxWba: 440, maxWeeks: 26, phoneNumber: "855-995-8863", website:"http://dol.nebraska.gov/UIBenefits", linkName: "NE Department of Labor"},
    {state: "Nevada (NV)", maxWba: 469, maxWeeks: 26, phoneNumber: "775-684-0350", website:"http://ui.nv.gov/home.htm", linkName: "NV Department of Employment, Training and Rehab"},  
    {state: "New Hampshire (NH)", maxWba: 427, maxWeeks: 26, phoneNumber: "800-852-3400", website:"http://www.nhes.nh.gov/services/claimants/index.htm", linkName: "NH Department of Employment Security"}, 
    {state: "New Jersey (NJ)", maxWba: 713, maxWeeks: 26, phoneNumber: "", website:"https://myunemployment.nj.gov/", linkName: "NJ Department of Labor and Workforce Development"}, 
    {state: "New Mexico (NM)", maxWba: 511, maxWeeks: 26, phoneNumber: "877-664-6984", website:"https://www.dws.state.nm.us/en-us/Unemployment", linkName: "NM Department of Workforce Solutions"}, 
    {state: "New York (NY)", maxWba: 504, maxWeeks: 26, phoneNumber: "888-209-8124", website:"http://labor.ny.gov/unemploymentassistance.shtm", linkName: "NY Department of Labor"}, 
    {state: "New Carolina (NC)", maxWba: 350, maxWeeks: 12, phoneNumber: "", website:"https://des.nc.gov/des", linkName: "NC Division of Employment Security"}, 
    {state: "North Dakota (ND)", maxWba: 618, maxWeeks: 26, phoneNumber: "", website:"http://www.jobsnd.com/unemployment-for-individuals", linkName: "ND Job Service"}, 
    {state: "Ohio (OH) - Individual", maxWba: 480, maxWeeks: 26, phoneNumber: "877-644-6562", website:"http://jfs.ohio.gov/ouc/", linkName: "OH Department of Job and Family Services"}, 
    {state: "Ohio (OH) - with Dependents", maxWba: 647, maxWeeks: 26, phoneNumber: "877-644-6562", website:"http://jfs.ohio.gov/ouc/", linkName: "OH Department of Job and Family Services"}, 
    {state: "Oklahoma (OK)", maxWba: 539, maxWeeks: 26, phoneNumber: "", website:"https://www.ok.gov/oesc/Claimants/", linkName: "OK Employment Security Commission (OESC)"}, 
    {state: "Oregon (OR)", maxWba: 648, maxWeeks: 26, phoneNumber: "800-237-3710", website:"http://www.oregon.gov/EMPLOY/Unemployment/Pages/default.aspx", linkName: "OR Employment Department"}, 
    {state: "Pennsylvania (PA) - Individual", maxWba: 572, maxWeeks: 26, phoneNumber: "888-313-7284", website:"http://www.uc.pa.gov/unemployment-benefits/file/Pages/File%20an%20Initial%20Claim.aspx", linkName: "PA Office of Unemployment Compensation"}, 
    {state: "Pennsylvania (PA) - with Dependents", maxWba: 580, maxWeeks: 26, phoneNumber: "888-313-7284", website:"http://www.uc.pa.gov/unemployment-benefits/file/Pages/File%20an%20Initial%20Claim.aspx", linkName: "PA Office of Unemployment Compensation"}, 
    {state: "Puerto Rico (PR)", maxWba: 192, maxWeeks: 26, phoneNumber: "", website:"http://trabajo.pr.gov/det_content.asp?cn_id=24", linkName: "PR Department of Labor & HR"}, 
    {state: "Rhode Island (RI) - Individual", maxWba: 586, maxWeeks: 26, phoneNumber: "", website:"http://www.dlt.ri.gov/ui/", linkName: "RI Dept. of Labor and Training"},
    {state: "Rhode Island (RI) - with Dependents", maxWba: 867, maxWeeks: 26, phoneNumber: "", website:"http://www.dlt.ri.gov/ui/", linkName: "RI Dept. of Labor and Training"},  
    {state: "South Carolina (SC)", maxWba: 326, maxWeeks: 20, phoneNumber: "", website:"https://dew.sc.gov/individuals", linkName: "SC Department of Employment & Workforce"},
    {state: "South Dakota (SD)", maxWba: 414, maxWeeks: 26, phoneNumber: "", website:"http://dlr.sd.gov/ui/default.aspx", linkName: "SD Department of Labor & Regulation"},  
    {state: "Tennessee (TN)", maxWba: 275, maxWeeks: 26, phoneNumber: "", website:"http://www.tennessee.gov/workforce/section/unemployment", linkName: "	TN Department of Labor and Workforce Development"}, 
    {state: "Texas (TX)", maxWba: 521, maxWeeks: 26, phoneNumber: "", website:"http://www.twc.state.tx.us/jobseekers/eligibility-benefit-amounts", linkName: "TX Workforce Commission"}, 
    {state: "Utah (UT)", maxWba: 580, maxWeeks: 26, phoneNumber: "", website:"https://jobs.utah.gov/ui/ContinuedClaims/UIAccountHome.aspx", linkName: "UT Department of Workforce Services"}, 
    {state: "Vermont (VT)", maxWba: 513, maxWeeks: 26, phoneNumber: "", website:"http://labor.vermont.gov/unemployment-insurance/", linkName: "VT Department of Labor"}, 
    {state: "Virginia (VA)", maxWba: 378, maxWeeks: 26, phoneNumber: "", website:"http://www.vec.virginia.gov/unemployed", linkName: "VA Employment Commission"}, 
    {state: "Washington (WA)", maxWba: 790, maxWeeks: 26, phoneNumber: "", website:"https://esd.wa.gov/unemployment", linkName: "	WA Employment Security Department"}, 
    {state: "West Virginia (WV)", maxWba: 424, maxWeeks: 26, phoneNumber: "", website:"https://workforcewv.org/", linkName: "Workforce WV"}, 
    {state: "Wisconsin (WI)", maxWba: 370, maxWeeks: 26, phoneNumber: "", website:"http://dwd.wisconsin.gov/ui/", linkName: "WI Department of Workforce Development"}, 
    {state: "Wyoming", maxWba: 508, maxWeeks: 26, phoneNumber: "", website:"https://wyui.wyo.gov/benefits/home.do", linkName: "WY Unemployment Insurance Home Page"}, 
]

var tableBody = $(".tableBody")

function tableCreation(){
    for (let i = 0; i < wbaArray.length; i++) {
        
        var newRow = $("<tr>");
        var newTd1 = $("<td>");
        var newTd2 = $("<td>");
        var newTd3 = $("<td>");

        $(newTd1).text(wbaArray[i].state);
        $(newTd2).text(wbaArray[i].maxWba);
        $(newTd3).text(wbaArray[i].maxWeeks);

        $(newRow).append(newTd1);
        $(newRow).append(newTd2);
        $(newRow).append(newTd3);

        $(tableBody).append(newRow);
    }
}

tableCreation();
