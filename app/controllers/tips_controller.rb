class TipsController < ApplicationController
  def create
      @tip = Tip.new(tip_params);
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
      params.require(:tip).permit(:tip)
  end
end
