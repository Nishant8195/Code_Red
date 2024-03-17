// Function to toggle a device (e.g., lights)
function toggleDevice(deviceId, isChecked) {
    const apiUrl = `https://kodessphere-api.vercel.app/Devices/H1H8GJF`;
    const requestOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ state: isChecked ? 'on' : 'off' }),
    };
  
    fetch(apiUrl, requestOptions)
      .then(response => {
        if (response.ok) {
          console.log(`Device ${deviceId} state updated successfully.`);
          // Optionally update UI or show success message
        } else {
          console.error('Error updating device state:', response.statusText);
          // Optionally show error message to the user
        }
      })
      .catch(error => {
        console.error('Error updating device state:', error);
        // Optionally show error message to the user
      });
  }
  
  // Function to adjust fan speed
  function adjustFanSpeed(deviceId, speedLevel) {
    const apiUrl = `https://kodessphere-api.vercel.app/Devices/H1H8GJF`;
    const requestOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ speed: speedLevel }),
    };
  
    fetch(apiUrl, requestOptions)
      .then(response => {
        if (response.ok) {
          console.log(`Fan ${deviceId} speed adjusted successfully.`);
          // Optionally update UI or show success message
        } else {
          console.error('Error adjusting fan speed:', response.statusText);
          // Optionally show error message to the user
        }
      })
      .catch(error => {
        console.error('Error adjusting fan speed:', error);
        // Optionally show error message to the user
      });
  }
  