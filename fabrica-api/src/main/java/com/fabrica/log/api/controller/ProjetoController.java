package com.fabrica.log.api.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.fabrica.log.domain.model.Projetos;
import com.fabrica.log.domain.repository.ProjetoRepository;
import com.fabrica.log.domain.service.CatalogoProjetoService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/projetos")
public class ProjetoController {
	private ProjetoRepository projetoRepository;
	private CatalogoProjetoService catalogoProjetoService;
	
	@GetMapping
	public List<Projetos> listar() {
		return projetoRepository.findAll(Sort.by("projetoId").descending());
	}
	
	@GetMapping("/{projetoId}")
	public ResponseEntity<Projetos> buscar(@PathVariable Long projetoId) {
		return projetoRepository.findById(projetoId)
				.map(ResponseEntity::ok)
				.orElse(ResponseEntity.notFound().build());
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public Projetos adicionar(@Valid @RequestBody Projetos projeto) {
		return catalogoProjetoService.salvar(projeto);
	}
	
	@PutMapping("/{projetoId}")
	public ResponseEntity<Projetos> atualizar(@PathVariable Long projetoId, @Valid @RequestBody Projetos projeto) {
		if (!projetoRepository.existsById(projetoId)) {
			return ResponseEntity.notFound().build();
		}
		
		projeto.setProjetoId(projetoId);
		projeto = catalogoProjetoService.salvar(projeto);
		
		return ResponseEntity.ok(projeto);
	}
	
	@DeleteMapping("/{projetoId}")
	public ResponseEntity<Void> remover(@PathVariable Long projetoId) {
		if (!projetoRepository.existsById(projetoId)) {
			return ResponseEntity.notFound().build();
		}
		
		catalogoProjetoService.excluir(projetoId);
		
		return ResponseEntity.noContent().build();
	}
}
