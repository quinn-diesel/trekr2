class CommentsController < ApplicationController
  def create
      hike = Hike.find params[:hike_id]
      comment = Comment.create comment: params[:comment], hike: hike
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
  def comment_params
      params.require(:comment).permit(:comment)
  end
end
