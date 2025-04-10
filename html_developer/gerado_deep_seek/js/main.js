// Main JavaScript File

document.addEventListener('DOMContentLoaded', function() {
    // Toggle sidebar on mobile
    const sidebarToggle = document.createElement('button');
    sidebarToggle.className = 'sidebar-toggle';
    sidebarToggle.innerHTML = '<i class="fas fa-bars"></i>';
    document.querySelector('.main-header').prepend(sidebarToggle);
    
    sidebarToggle.addEventListener('click', function() {
        document.querySelector('.sidebar').classList.toggle('active');
    });
    
    // Handle login form submission
    const loginForm = document.querySelector('.login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would typically validate and send the data to the server
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            console.log('Login attempt:', { username, password });
            // Redirect to dashboard after successful login
            window.location.href = 'dashboard.html';
        });
    }
    
    // Handle logout
    const logoutBtn = document.querySelector('.logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // Here you would typically clear session and redirect to login
            console.log('Logging out...');
            window.location.href = 'index.html';
        });
    }
    
    // Tab functionality
    const tabs = document.querySelectorAll('.tabs li');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs and content
            document.querySelectorAll('.tabs li').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            this.classList.add('active');
            const tabId = this.getAttribute('data-tab');
            document.getElementById(`${tabId}-tab`).classList.add('active');
        });
    });
    
    // Photo upload preview
    const photoInput = document.getElementById('personPhoto');
    if (photoInput) {
        photoInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    document.getElementById('photoPreview').src = event.target.result;
                };
                reader.readAsDataURL(file);
            }
        });
    }
    
    // Vehicle photo upload preview
    const vehiclePhotoInput = document.getElementById('vehiclePhoto');
    if (vehiclePhotoInput) {
        vehiclePhotoInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    document.getElementById('vehiclePhotoPreview').src = event.target.result;
                };
                reader.readAsDataURL(file);
            }
        });
    }
    
    // Form submissions
    const forms = ['personForm', 'vehicleForm', 'accessForm'];
    forms.forEach(formId => {
        const form = document.getElementById(formId);
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                console.log(`Form ${formId} submitted`);
                // Here you would typically send the data to the server
                // and handle the response
                
                // For demo purposes, just show a success message
                alert('Cadastro realizado com sucesso!');
                form.reset();
                
                // Reset photo previews if they exist
                if (formId === 'personForm' && document.getElementById('photoPreview')) {
                    document.getElementById('photoPreview').src = 'https://via.placeholder.com/100';
                }
                if (formId === 'vehicleForm' && document.getElementById('vehiclePhotoPreview')) {
                    document.getElementById('vehiclePhotoPreview').src = 'https://via.placeholder.com/100';
                }
            });
        }
    });
});