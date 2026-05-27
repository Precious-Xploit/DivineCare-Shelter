(function(){
    const contactForm = document.querySelector('#contactForm');
    const businessEmail = 'support@divinecareshelter.com'

    
    contactForm.addEventListener('submit', (e)=>{

        const firstName = document.querySelector('.input-first-name');
        const lastName = document.querySelector('.input-last-name');
        const subject = document.querySelector('.input-subject');
        const email = document.querySelector('.input-email');
        const phoneNumber = document.querySelector('.input-phone-number');
        const message = document.querySelector('.input-message');
        const formattedSubject = `DCS: ${subject.value?.replaceAll(' ','%20')}`

        const messageBody = `
            ${message.value}

            %0A %0A ${firstName.value} ${lastName.value}
            %0A ${phoneNumber.value}
            %0A ${email.value}
        `

        location.href = `mailto:${businessEmail}?subject=${formattedSubject}&body=${messageBody}`

        e.preventDefault()
    })
})()