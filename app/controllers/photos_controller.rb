class PhotosController < ApplicationController


  def create
      @photo = Photo.new(photo_params);
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
  def photo_params
  params.require(:photo).permit(:image_url)
  end
end
