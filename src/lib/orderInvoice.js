export const orderInvoice = ({ duration,
    service_id,
    image,
    title,

    status,

    durationType,
    city,
    area,
    selectDistrict,
    selectDivision,
    totalCost
}) => {
    return `
    <div className="">
<h2 className="">Booking Conform</h2>
<h2 className=""><strong>ServiceId:</strong>${service_id}</h2>
<div style="text-align:center; margin:20px 0">
<img src="${image}" alt="" style="width:120px; height:120px ;border-radius:12px; object-fit:cover"/></div>
<table style="width:100%;border-collapse:collapse">
<tr className="">
<td style="padding:8px; border:1px  solid #ddd"><strong>Service:</strong></td>
<td style="padding:8px; border:1px solid #ddd">${title}</td>
</tr>
<tr className="">
<td style="padding:8px; border:1px solid #ddd"><strong>Duration:</strong></td>
<td style="padding:8px; border:1px solid #ddd">${duration} ${durationType}</td>
</tr>
<tr className="">
<td style="padding:8px; border:1px solid #ddd"><strong>Division:</strong></td>
<td style="padding:8px; border:1px solid #ddd">${selectDivision}</td>
</tr>
<tr className="">
<td style="padding:8px; border:1px solid #ddd"><strong>District:</strong></td>
<td style="padding:8px; border:1px solid #ddd">${selectDistrict}</td>
</tr>
<tr className="">
<td style="padding:8px; border:1px solid #ddd"><strong>Area:</strong></td>
<td style="padding:8px; border:1px solid #ddd">${area}</td>
</tr>
<tr className="">
<td style="padding:8px; border:1px solid #ddd"><strong>city:</strong></td>
<td style="padding:8px; border:1px solid #ddd">${city}</td>
</tr>
<tr className="">
<td style="padding:8px; border:1px solid #ddd"><strong>status:</strong></td>
<td style="padding:8px; border:1px solid #ddd">${status}</td>
</tr>
<tr className="">
<td style="padding:8px; border:1px solid #ddd"><strong>cost:</strong></td>
<td style="padding:8px; border:1px solid #ddd">${totalCost}</td>
</tr>
</table>
    </div>
`
}