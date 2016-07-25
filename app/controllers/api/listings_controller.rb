class Api::ListingsController < ApplicationController
  def index
    @listings = Listing.all
  end

  def create
    @listing = Listing.create!(listing_params)

    render :show
  end

  def show
    @listing = Listing.find(params[:id])
  end

  def update
    @listing = Listing.find(params[:id])

    @listing.update!(listing_params)

    render :show
  end

  def destroy
    @listing = Listing.find(params[:id])

    @listing.destroy

    render :index
  end

  def listing_params
    params.require(:listing).permit(:name, :description, :ord, :author_id)
  end
end
