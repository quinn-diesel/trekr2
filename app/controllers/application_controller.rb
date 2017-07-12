class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  before_action :fetch_user

  private

  def fetch_user
    #find the current user, their session and if it's present
    @current_user = User.find session[:user_id] if session[:user_id].present?
    #give the sesssion nil if the user is nt present
    session[:user_id] = nil unless @current_user.present?
  end

  def check_if_logged_in
    redirect_to login_path unless @current_user.present?
  end

  # def check_if_admin
  #   redirect_to login_path unless @current_user.present? && @current_user.is_admin?
  # end

end
