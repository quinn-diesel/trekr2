class CommentsController < ApplicationController
  def create
      @comment = Comment.new(comment_params);
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
