package com.fabrica.log.domain.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fabrica.log.domain.model.Projetos;
import com.fabrica.log.domain.repository.ProjetoRepository;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class CatalogoProjetoService {
private ProjetoRepository projetoRepository;
	
	@Transactional
	public Projetos salvar(Projetos projeto) {
		return  projetoRepository.save(projeto);
	}
	
	@Transactional
	public void excluir(Long projetoId) {
		projetoRepository.deleteById(projetoId);
	}
}
