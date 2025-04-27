//switch form between shopper and brand 
window.switchForm = function(type) {
    const shopperOption = document.querySelector('.account-option.shopper');
    const brandOption = document.querySelector('.account-option.brand');
    const formTitle = document.querySelector('.signup-form-container h2');
    const formContainer = document.querySelector('.signup-form');

    if (type === 'shopper') {
        shopperOption.classList.add('active');
        brandOption.classList.remove('active');
        formTitle.textContent = 'Create Your Shopper Account';
        formContainer.innerHTML = `
            <div class="form-group">
                <label for="fullName">Full Name</label>
                <input type="text" id="fullName" placeholder="Enter your full name">
            </div>

            <div class="form-group">
                <label for="email">Email Address</label>
                <input type="email" id="email" placeholder="Enter your email address">
            </div>

            <div class="form-group">
                <label for="password">Password</label>
                <div class="password-input">
                    <input type="password" id="password" placeholder="Create a password">
                    <button type="button" class="toggle-password">
                        <i class="fas fa-eye"></i>
                    </button>
                </div>
                <p class="password-hint">Password must be at least 8 characters with uppercase, lowercase, number, and special character</p>
            </div>

            <div class="form-group">
                <label for="confirmPassword">Confirm Password</label>
                <div class="password-input">
                    <input type="password" id="confirmPassword" placeholder="Confirm your password">
                    <button type="button" class="toggle-password">
                        <i class="fas fa-eye"></i>
                    </button>
                </div>
            </div>

            <button type="submit" class="create-account-btn">Create Account</button>

            <div class="divider">
                <span>or continue with</span>
            </div>

            <div class="social-signup">
                <button class="social-btn google">
                    <img src="./images/google.png" alt="Google">
                    Google
                </button>
                <button class="social-btn facebook">
                    <img src="./images/facebook.png" alt="Facebook">
                    Facebook
                </button>
                <button class="social-btn apple">
                    <img src="./images/apple.png" alt="Apple">
                    Apple
                </button>
            </div>
        `;
    } else {
        brandOption.classList.add('active');
        shopperOption.classList.remove('active');
        formTitle.textContent = 'Create Your Brand Account';
        formContainer.innerHTML = `
            <div class="form-group">
                <label for="fullName">Your Full Name</label>
                <input type="text" id="fullName" placeholder="Enter your full name">
            </div>

            <div class="form-group">
                <label for="email">Email Address</label>
                <input type="email" id="email" placeholder="Enter your email address">
            </div>

            <div class="form-group">
                <label for="password">Password</label>
                <div class="password-input">
                    <input type="password" id="password" placeholder="Create a password">
                    <button type="button" class="toggle-password">
                        <i class="fas fa-eye"></i>
                    </button>
                </div>
                <p class="password-hint">Password must be at least 8 characters with uppercase, lowercase, number, and special character</p>
            </div>

            <div class="form-group">
                <label for="confirmPassword">Confirm Password</label>
                <div class="password-input">
                    <input type="password" id="confirmPassword" placeholder="Confirm your password">
                    <button type="button" class="toggle-password">
                        <i class="fas fa-eye"></i>
                    </button>
                </div>
            </div>

            <div class="form-group">
                <h3>Brand Information</h3>
            </div>

            <div class="form-group">
                <label for="brandName">Brand Name</label>
                <input type="text" id="brandName" placeholder="Enter your brand name">
            </div>

            <div class="form-group">
                <label for="brandId">Create your brand id</label>
                <input type="text" id="brandId" placeholder="Create a unique brand ID">
            </div>

            <div class="form-group">
                <label for="brandDescription">Brand Description</label>
                <textarea id="brandDescription" placeholder="Tell us about your brand, products, and values" rows="4"></textarea>
            </div>

            <div class="form-group">
                <label for="brandCategory">Brand Category</label>
                <select id="brandCategory">
                    <option value="" disabled selected>Select a category</option>
                    <option value="fashion">Fashion</option>
                    <option value="accessories">Accessories</option>
                    <option value="beauty">Beauty</option>
                    <option value="home">Home</option>
                    <option value="art">Art</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <div class="form-group">
                <label for="websiteUrl">Website URL (Optional)</label>
                <input type="url" id="websiteUrl" placeholder="Enter your website URL">
            </div>

            <button type="submit" class="create-account-btn">Create Brand Account</button>

            <div class="divider">
                <span>or continue with</span>
            </div>

            <div class="social-signup">
                <button class="social-btn google">
                    <img src="./images/google.png" alt="Google">
                    Google
                </button>
                <button class="social-btn facebook">
                    <img src="./images/facebook.png" alt="Facebook">
                    Facebook
                </button>
                <button class="social-btn apple">
                    <img src="./images/apple.png" alt="Apple">
                    Apple
                </button>
            </div>
        `;
    }

    // Reattach event listeners for password toggle
    const togglePasswordButtons = document.querySelectorAll('.toggle-password');
    togglePasswordButtons.forEach(button => {
        button.addEventListener('click', function() {
            const passwordInput = this.parentElement.querySelector('input');
            const icon = this.querySelector('i');
            
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                passwordInput.type = 'password';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        });
    });

    // Only call animateFormSwitch if GSAP is loaded
    if (typeof gsap !== 'undefined') {
        animateFormSwitch();
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Initial setup - hide elements
    gsap.set('.top-nav', { y: -50, opacity: 0 });
    gsap.set('h1, .subtitle', { y: 30, opacity: 0 });
    gsap.set('.account-option', { y: 50, opacity: 0 });
    gsap.set('.signup-form-container', { y: 50, opacity: 0 });
    gsap.set('.login-prompt, footer', { y: 30, opacity: 0 });

    // Create timeline
    const tl = gsap.timeline();

    // Animate elements in sequence
    tl.to('.top-nav', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out'
    })
    .to('h1', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out'
    })
    .to('.subtitle', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out'
    }, '-=0.6')
    .to('.account-option', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out'
    }, '-=0.4')
    .to('.signup-form-container', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out'
    }, '-=0.4')
    .to('.login-prompt, footer', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out'
    }, '-=0.4');

    // Add hover animations for account options
    const accountOptions = document.querySelectorAll('.account-option');
    accountOptions.forEach(option => {
        option.addEventListener('mouseenter', () => {
            if (!option.classList.contains('active')) {
                gsap.to(option, {
                    scale: 1.02,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }
        });

        option.addEventListener('mouseleave', () => {
            if (!option.classList.contains('active')) {
                gsap.to(option, {
                    scale: 1,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }
        });
    });

    // Animate form elements when switching between shopper and brand
    function animateFormSwitch() {
        const formElements = document.querySelectorAll('.form-group, .create-account-btn, .divider, .social-signup');
        
        gsap.fromTo(formElements, 
            { y: 20, opacity: 0 },
            { 
                y: 0,
                opacity: 1,
                duration: 0.5,
                stagger: 0.1,
                ease: 'power2.out'
            }
        );
    }

    //Gsap animation for form submission
    const signupForm = document.querySelector('.signup-form');
    
    signupForm.addEventListener('submit', async (e) => {
        e.preventDefault(); // Prevent default form submission
        
        // Get form values
        const formData = {
            fullName: document.getElementById('fullName').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            confirmPassword: document.getElementById('confirmPassword').value
        };

        // Validate form data
        if (!validateForm(formData)) {
            return;
        }

        try {
            const response = await submitForm(formData);
            handleSignupSuccess(response);
        } catch (error) {
            handleSignupError(error);
        }
    });

    document.querySelector('.google').addEventListener('click', () => handleSocialLogin('google'));//awaiting backend api`
    document.querySelector('.facebook').addEventListener('click', () => handleSocialLogin('facebook'));//awaiting backend api
    document.querySelector('.apple').addEventListener('click', () => handleSocialLogin('apple'));//awaiting backend api
});

function validateForm(formData) {
    // Check if form is empty
    if (!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword) {
        showError('All fields are required');
        return false;
    }

    // makeing sure email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        showError('Please enter a valid email address');
        return false;
    }

    // password regex to validate password strength
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(formData.password)) {
        showError('Password must be at least 8 characters with uppercase, lowercase, number, and special character');
        return false;
    }

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
        showError('Passwords do not match');
        return false;
    }

    return true;
}

async function submitForm(formData) {
    try {
        const response = await fetch('/api/signup', {  // awaiting api endpoint
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                fullName: formData.fullName,
                email: formData.email,
                password: formData.password
            })
        });

        if (!response.ok) {
            throw new Error('Signup failed');
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
}

function handleSignupSuccess(response) {
    //success
    showMessage('Account created successfully!', 'success');
    
    //auth token
    if (response.token) {
        localStorage.setItem('authToken', response.token);
    }
    
    // Redirect to dashboard 
    setTimeout(() => {
        window.location.href = '/productPage.html';  
    }, 1500);
}

function handleSignupError(error) {
    showError('Failed to create account. Please try again.');
    console.error('Signup error:', error);
}

function showMessage(message, type) {
    // get the mesage div
    let messageContainer = document.querySelector('.message-container');
    if (!messageContainer) {
        messageContainer = document.createElement('div');
        messageContainer.className = 'message-container';
        signupForm.insertBefore(messageContainer, signupForm.firstChild);
    }

    messageContainer.textContent = message;
    messageContainer.className = `message-container ${type}`;
    
    // Remove message after 3 seconds
    setTimeout(() => {
        messageContainer.remove();
    }, 3000);
}

function showError(message) {
    showMessage(message, 'error');
}

async function handleSocialLogin(provider) {
    try {
        //OAuth flow for each google and the rest
        switch(provider) {
            case 'google':
                window.location.href = '/auth/google';//assuming this is what the api route looks like
                break;
            case 'facebook':
                window.location.href = '/auth/facebook';//assuming this is what the api route looks like
                break;
            case 'apple':
                window.location.href = '/auth/apple';//assuming this is what the api route looks like
                break;
        }
    } catch (error) {
        showError(`Failed to login with ${provider}`);
        console.error(`${provider} login error:`, error);
    }
}
