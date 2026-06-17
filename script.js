function calculateAge() {
    const dob = document.getElementById("birthdate").value;
    const currentdate=document.getElementById("currentdate").value;

    if (!dob||!currentdate) {
        document.getElementById("result").innerHTML =
            "Please select your birth date.";
        return;
    }

    const birthDate = new Date(dob);
    const today = new Date(currentdate);

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    // Adjust days
    if (days < 0) {
        months--;

        const previousMonth = new Date(
            today.getFullYear(),
            today.getMonth(),
            0
        );

        days += previousMonth.getDate();
    }

    // Adjust months
    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById("result").innerHTML =
        `You are <br>
         <strong>${years}</strong> Years,
         <strong>${months}</strong> Months,
         and <strong>${days}</strong> Days old.`;
}