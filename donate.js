// function copyToClipboard() {
//     var copyText = document.getElementById('myCoin');
//     copyText.select();
//     copyText.setSelectionRange(0, 99999);
//     navigator.clipboard.writeText(copyText);

//     var trc = document.getElementById('myTrc');
//     trc.innerHTML = "Copied" + copyText.value;
// }

// function displayTrc (){
//     var trc = document.getElementById('myTrc');
// }

const  textInput = document.getElementById('btc-address');
const copyButton = document.getElementById('btn');


copyButton.addEventListener('click', async() => {
    const secretAddress = copyButton.getAttribute('data-address')
    try {
        await navigator.clipboard.writeText(secretAddress);
        copyButton.textContent = 'Copied Successfully';
        setTimeout(() => {
            copyButton.textContent = 'copy address';
        }, 3000)
    } catch (error) {
        console.error('Failed to copy address', err);
    }
})

const textInputTwo = document.getElementById('trc-address');
const copyButtonTwo = document.getElementById('btn-two');

copyButtonTwo.addEventListener('click', async() =>{
    const secretAddressTwo = copyButtonTwo.getAttribute('data-address')
    try {
        await navigator.clipboard.writeText(secretAddressTwo);
        copyButtonTwo.textContent = 'Copied Successfully';
        setTimeout(() => {
            copyButtonTwo.textContent = 'copy address';
        }, 3000)
    } catch (error) {
        console.error('Failed to copy address', err)
    }
})