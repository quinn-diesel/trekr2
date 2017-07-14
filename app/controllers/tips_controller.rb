class TipsController < ApplicationController

  before_action :check_if_logged_in, except: [:index, :show]

  def create
    #  @tip = Tip.new(tip_params);

    hike = Hike.find params[:hike_id]

    m = Marker.create lat: params[:lat], long: params[:lng], hike: hike

    t = Tip.create tip: params[:tip], marker: m

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
  end

  private
  def tip_params
      params.require(:tip).permit(:tip, :hike_id)
  end
end
