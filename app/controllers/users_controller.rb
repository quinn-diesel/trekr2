class UsersController < ApplicationController

### Check the user login
before_action :get_user, only: [ :show, :edit, :update ]
# before_action :check_if_admin,  only: [ :index ]

before_action :check_if_logged_in, only: [ :hike_create, :update_hikes ]

  def get_user
     @user = User.find params["id"]
  end

#### Standard CRUD #####

  def create
      @user = User.new(user_params)

        if params[:file].present?
          # perform upload to cloundinary
          @user.photo = req['public_id']
        end

        if @user.save
          session[:user_id] = @user.id  # perform login (set session)
          redirect_to user_path(@user.id)   # /users/17
        else
          render :new
        end

  end

  def update
    @user = User.find params["id"]


    if params[:file].present?
      @user.photo = req['public_id']
    end


    @user.update user_params
    redirect_to user_path( params["id"] )
  end

  def index
  end

  def show
  end

  def edit
  end

  def new
    @user = User.new
  end

  def destroy
  end

  private
  def user_params
      params.require(:user).permit(:firstname, :surname, :email, :password, :password_confirmation, :location, :photo)
  end
end
