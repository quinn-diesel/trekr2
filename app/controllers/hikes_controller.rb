class HikesController < ApplicationController

  before_action :check_if_logged_in, except: [:index, :show]

  def create
      @hike = Hike.new(hike_params);
  end

  def update
  end

  def index
      #  @startLocation = Hike.first.waypoints.first
       hikes = Hike.all
       @hikes = []
       hikes.each do |h|
         w = h.waypoints.first
         hike_data = {id: h.id, name: h.name, description: h.description, start_point: w}
         @hikes.push hike_data
       end
  end

  def show
      hike = Hike.find params["id"]
      waypoints = hike.waypoints
      # waypoints = Waypoints.where "hike_id" == hikeID
      @waypoints = []
      waypoints.each do |w|
        waypoint = [w.lat, w.long]
        @waypoints.push waypoint
      end
  end

  def edit
  end

  def new
  end

  def destroy
  end

  def hike_waypoints
      w = Waypoint.where(hike_id: params[:hike_id]);
      render json: w
  end

  def save_waypoints
    waypointArray = params[:waypoints]
    #   desc = params[:description]
    #   puts waypointArray
    #   hike = Hike.create(hike_params)
    hike = Hike.create({
        name: params[:name],
        description: params[:description],
        user: @current_user
    })
    #   testies = []

    if params[:waypoints].present?
      waypointArray.each do |key, val|
          lat =  val[:lat]  #waypointArray[i]['lat']
          long = val[:lng]  #waypointArray[i]['lng']
          Waypoint.create({
              lat: lat,
              long: long,
              hike_id: hike.id
          })
    #   testies.push({
        #       lat: lat,
        #       long: long
        #       })
      end
    end

    #   puts testies


     render json: {status: 200, success: true, hike: hike}

  end

  private
  def hike_params
  params.require(:hike).permit(:name, :description)
  end
end
