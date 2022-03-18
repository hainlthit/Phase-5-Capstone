class VillagersController < ApplicationController


    def index 
        render json: Villager.all, status: :ok
    end

    def show
        villager = Villager.find(params[:id])
        render json: villager, status: :ok
    end

    def create
        villager = Villager.create!(villager_params)
        render json: villager, status: :created
    end

    private

    def villager_params
        params.permit(:id, :name, :species, :birthday, :personality, :image, :likes, :created_by)
    end

end
