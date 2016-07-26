class Api::BoardsController < ApplicationController
  def index
    @boards = current_user.boards
  end

  def create
    @board = Board.create!(board_params)

    render :show
  end

  def show
    @board = Board.find(params[:id])
  end

  def update
    @board = Board.find(params[:id])

    @board.update!(board_params)

    render :show
  end

  def destroy
    @board = Board.find(params[:id])

    @board.destroy

    render :index
  end

  def board_params
    params.require(:board).permit(:name, :description, :listing_id, :author_id, :master_board_id, :ord)
  end
end
