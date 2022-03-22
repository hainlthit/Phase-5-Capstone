class IslandsController < ApplicationController

    def index 
        render json: Island.all, status: :ok
    end

    def show
        island = Island.find(params[:id])
        render json: island, status: :ok
    end

    def create
        island = Island.create!(island_params)
        render json: island, status: :created
    end

    def update 
        island = Island.find(params[:id])
        island.update!(island_params)
        render json: villager, status: :ok
    end 

    def destroy
        island = Island.find(params[:id])
        island.destroy
        render json: {}
    end 

    private

    def island_params
        params.permit(:name, :user_id)
    end

end
