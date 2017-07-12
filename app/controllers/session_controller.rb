class SessionController < ApplicationController
  def create
    user = User.find_by email: params[:email]

    if user.present? and user.authenticate params[:password]
      #success!
      session[ :user_id ] = user.id
      redirect_to hikes_path
    else
      #bad credentials
      flash[ :error ] = "Incorrect email address and/or password"
      redirect_to login_path
    end
  end

  def update
  end

  def index
  end

  def show
  end

  def edit
  end

  def new

  end

  def destroy
    session[ :user_id ] = nil
    redirect_to root_path
  end
end
