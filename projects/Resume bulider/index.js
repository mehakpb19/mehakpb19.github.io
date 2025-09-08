function printDiv(divId) {
    var divContents = document.getElementById(divId).innerHTML;
    var printWindow = window.open('', '', 'height=3508,width=2480');
    printWindow.document.write(divContents);
    printWindow.print();
    printWindow.close();
}