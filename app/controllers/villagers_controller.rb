class VillagersController < ApplicationController


    def index 
        render json: Villager.all, status: :ok
    end

    def show
        villager = Villager.find(params[:id])
        render json: villager, status: :ok
    end

end
