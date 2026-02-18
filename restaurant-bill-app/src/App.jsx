import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true, // Toggle between login and register forms
      user: null, // Store token
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '', // For registration
      error: '',
      loading: true,
    };

    // Bind methods to ensure 'this' context
    this.handleRegister = this.handleRegister.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  // Generic input change handler
  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  // Check for existing token on component mount
  componentDidMount() {
    const token = localStorage.getItem('token');
    if (token) {
      this.setState({ user: { token } });
    }
    this.setState({ loading: false });
  }

  // Handle registration
  async handleRegister(event) {
    event.preventDefault();
    this.setState({ error: '' });

    const { password, passwordConfirmation } = this.state;
    
    if (password !== passwordConfirmation) {
      this.setState({ error: 'Passwords do not match' });
      return;
    }

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/register', {
        name: this.state.name,
        email: this.state.email,
        password,
        password_confirmation: passwordConfirmation,
      });

      const { token } = response.data;
      localStorage.setItem('token', token);
      this.setUser({ token });
      this.clearForm();
    } catch (error) {
      this.setState({ 
        error: error.response?.data?.message || 'Registration failed' 
      });
    }
  }

  // Handle login
  async handleLogin(event) {
    event.preventDefault();
    this.setState({ error: '' } );

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login', {
        email: this.state.email,
        password: this.state.password,
      });

      const { token } = response.data;
      localStorage.setItem('token', token);
      this.setUser({ token });
      this.clearForm();
    } catch (error) {
      this.setState({ 
        error: error.response?.data?.message || 'Login failed' 
      });
    }
  }

  // Handle logout
  async handleLogout() {
    this.setState({ error: '' });

    try {
      await axios.post(
        'http://127.0.0.1:8000/api/logout',
        {},
        {
          headers: { Authorization: `Bearer ${this.state.user?.token}` },
        }
      );
      
      localStorage.removeItem('token');
      this.setUser(null);
    } catch (error) {
      this.setState({ 
        error: error.response?.data?.message || 'Logout failed' 
      });
    }
  }

  // Toggle between login and register forms
  toggleForm() {
    this.setState(prevState => ({
      isLogin: !prevState.isLogin,
      error: '',
      ...this.clearFormFields()
    }));
  }

  // Helper method to set user state and clear form
  setUser(user) {
    this.setState({ 
      user,
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      error: ''
    });
  }

  // Helper method to clear form fields
  clearFormFields() {
    return {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    };
  }

  // Helper method to clear form
  clearForm() {
    this.setState(this.clearFormFields());
  }

  // Render method
  render() {
    const { loading, user, isLogin, error, name, email, password, passwordConfirmation } = this.state;

    if (loading) {
      return <div className="text-center mt-10">Loading...</div>;
    }

    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
          {user ? (
            this.renderLoggedInView()
          ) : (
            this.renderAuthForms()
          )}
        </div>
      </div>
    );
  }

  // Render logged in view
  renderLoggedInView() {
    const { user, error } = this.state;

    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Welcome!</h2>
        <p className="mb-4">You are logged in.</p>
        <p className="mb-4 text-sm text-gray-600">Token: {user.token}</p>
        <button
          onClick={this.handleLogout}
          className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    );
  }

  // Render authentication forms
  renderAuthForms() {
    const { isLogin, error } = this.state;

    return (
      <>
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isLogin ? 'Login' : 'Register'}
        </h2>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        <form 
          onSubmit={isLogin ? this.handleLogin : this.handleRegister} 
          className="space-y-4"
        >
          {this.renderNameField()}
          {this.renderEmailField()}
          {this.renderPasswordField()}
          {!isLogin && this.renderPasswordConfirmationField()}
          {this.renderSubmitButton()}
        </form>
        {this.renderToggleLink()}
      </>
    );
  }

  // Render name field (only for registration)
  renderNameField() {
    const { isLogin, name } = this.state;

    if (isLogin) return null;

    return (
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={this.handleInputChange}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
    );
  }

  // Render email field
  renderEmailField() {
    const { email } = this.state;

    return (
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={this.handleInputChange}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
    );
  }

  // Render password field
  renderPasswordField() {
    const { password } = this.state;

    return (
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={this.handleInputChange}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
    );
  }

  // Render password confirmation field (only for registration)
  renderPasswordConfirmationField() {
    const { passwordConfirmation } = this.state;

    return (
      <div>
        <label
          htmlFor="password_confirmation"
          className="block text-sm font-medium text-gray-700"
        >
          Confirm Password
        </label>
        <input
          type="password"
          id="password_confirmation"
          name="passwordConfirmation"
          value={passwordConfirmation}
          onChange={this.handleInputChange}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
    );
  }

  // Render submit button
  renderSubmitButton() {
    const { isLogin } = this.state;

    return (
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        {isLogin ? 'Login' : 'Register'}
      </button>
    );
  }

  // Render toggle link
  renderToggleLink() {
    const { isLogin } = this.state;

    return (
      <p className="mt-4 text-center text-sm">
        {isLogin ? "Don't have an account?" : 'Already have an account?'}
        <button
          type="button"
          onClick={this.toggleForm}
          className="ml-1 text-blue-500 hover:underline"
        >
          {isLogin ? 'Register' : 'Login'}
        </button>
      </p>
    );
  }
}

export default App;