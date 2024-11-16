import React from 'react';
import { Music2, Clock, Users, FileMusic, CheckCircle } from 'lucide-react';

export const RequestSong = () => {
  const [formData, setFormData] = React.useState({
    projectName: '',
    category: '',
    duration: '60',
    style: '',
    audience: '',
    message: '',
    deadline: '',
    additionalInfo: ''
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('https://hook.eu1.make.com/gfh2vdvsevja93cwe1ie5av2mxi55biv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setSubmitStatus({
        type: 'success',
        message: 'Your song request has been submitted successfully!'
      });
      setFormData({
        projectName: '',
        category: '',
        duration: '60',
        style: '',
        audience: '',
        message: '',
        deadline: '',
        additionalInfo: ''
      });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'There was an error submitting your request. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (submitStatus.type === 'success') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md w-full mx-4">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h2>
            <p className="text-gray-600 mb-8">
              Your request has been successfully submitted. We will be in touch soon to discuss your custom song project.
            </p>
            <div className="space-y-4">
              <a
                href="/"
                className="block w-full py-3 bg-purple-500 text-white rounded-lg font-semibold hover:bg-purple-600 transition-colors"
              >
                Return to Home
              </a>
              <button
                onClick={() => setSubmitStatus({ type: null, message: '' })}
                className="block w-full py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                Submit Another Request
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519683109079-d5f539e1542f?auto=format&fit=crop&q=80"
            alt="Recording Studio"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Music2 className="h-16 w-16 mx-auto mb-6 text-purple-400" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Request Your Custom Song
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            Tell us about your vision, and we'll bring it to life through music
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {submitStatus.type === 'error' && (
          <div className="mb-6 p-4 rounded-lg bg-red-100 text-red-700">
            {submitStatus.message}
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Project Details */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Project Details</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="projectName" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Name
                  </label>
                  <input
                    type="text"
                    id="projectName"
                    name="projectName"
                    value={formData.projectName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="e.g., Company Anthem 2024"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select a category</option>
                    <option value="team-building">Team Building Anthem</option>
                    <option value="customer">Customer Appreciation</option>
                    <option value="training">Training & Development</option>
                    <option value="onboarding">Employee Onboarding</option>
                    <option value="special">Special Occasion</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-2">
                    Desired Duration (seconds)
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="number"
                      id="duration"
                      name="duration"
                      value={formData.duration}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      min="30"
                      max="300"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="style" className="block text-sm font-medium text-gray-700 mb-2">
                    Musical Style
                  </label>
                  <input
                    type="text"
                    id="style"
                    name="style"
                    value={formData.style}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="e.g., Upbeat Corporate Rock"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Target Audience */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Target Audience</h2>
              
              <div>
                <label htmlFor="audience" className="block text-sm font-medium text-gray-700 mb-2">
                  Who is this song for?
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    id="audience"
                    name="audience"
                    value={formData.audience}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="e.g., New employees aged 25-40"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Key Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="What's the main message you want to convey?"
                  required
                />
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Timeline</h2>
              
              <div>
                <label htmlFor="deadline" className="block text-sm font-medium text-gray-700 mb-2">
                  Desired Completion Date
                </label>
                <input
                  type="date"
                  id="deadline"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            {/* Additional Information */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Additional Information</h2>
              
              <div>
                <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-2">
                  Any other details we should know?
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Reference songs, specific requirements, or any other details..."
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 bg-purple-500 text-white rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${
                  isSubmitting ? 'bg-purple-400 cursor-not-allowed' : 'hover:bg-purple-600'
                }`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};